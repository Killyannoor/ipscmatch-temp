import { getSession } from "@/app/actions/actions";
import CompleteSignup from "@/components/Custom/CompleteSignup";
import { redirect } from "next/navigation";
import { PrismaClient } from "../../../../../../generated/prisma";

const prisma = new PrismaClient();

export default async function Confirm({
  params,
}: {
  params: Promise<{ id: string; squadId: string }>;
}) {
  const { id, squadId } = await params;
  const session = await getSession();

  const match = await prisma.match.findUnique({
    where: { id: parseInt(id) },
    select: {
      id: true,
      signupDeadline: true,
      capacity: true,
    },
  });

  if (!match) redirect(`/`);

  const canSignup = new Date() > match.signupDeadline!;

  if (!canSignup) {
    redirect(`/matches/${id}`);
  }

  if (!session.isLoggedIn) {
    redirect("/");
  }

  async function registerPlayerForMatch(
    matchId: number,
    playerId: number,
    squadId: number
  ) {
    return await prisma.$transaction(async (tx) => {
      const match = await tx.match.findUnique({
        where: { id: matchId },
        select: {
          capacity: true,
          squads: {
            where: {
              id: squadId,
            },
            include: {
              _count: true,
            },
          },
        },
      });

      if (!match)
        redirect(`/matches/${matchId}/?error=geen-wedstrijd-gevonden`);

      const totalRegs = match?.squads[0]._count.matchRegistrations;
      const capacity = match?.squads[0].capacity;

      if (totalRegs >= capacity) {
        redirect(`/matches/${matchId}/?error=squad-vol`);
      }

      const alreadyRegistered = await tx.matchRegistration.findFirst({
        where: {
          playerId,
          squad: { matchId },
        },
      });

      if (alreadyRegistered) {
        return alreadyRegistered;
      }

      const newRegistration = await tx.matchRegistration.create({
        data: {
          playerId,
          squadId,
        },
      });

      return newRegistration;
    });
  }

  const registration = await registerPlayerForMatch(
    parseInt(id),
    session.id!,
    parseInt(squadId)
  );

  return (
    <div className="max-w-5xl mx-auto px-6 space-y-8">
      <CompleteSignup
        squadId={squadId}
        registrationId={registration.id}
        matchId={id}
      />
    </div>
  );
}
