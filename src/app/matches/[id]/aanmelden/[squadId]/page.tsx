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
      signupDeadline: true,
      capacity: true,
    },
  });

  const canSignup = new Date() < match?.signupDeadline!;

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
        select: { capacity: true },
      });
      if (!match) throw new Error("Match niet gevonden");

      const totalRegs = await tx.matchRegistration.count({
        where: { squad: { matchId } },
      });

      if (totalRegs >= match.capacity) {
        throw new Error("Match capaciteit bereikt");
      }

      const alreadyRegistered = await tx.matchRegistration.findFirst({
        where: {
          playerId,
          squad: { matchId },
        },
      });

      if (alreadyRegistered) {
        throw new Error("Deze speler is al aangemeld");
      }

      return await tx.matchRegistration.create({
        data: {
          playerId,
          squadId,
        },
      });
    });
  }

  await registerPlayerForMatch(parseInt(id), session.id!, parseInt(squadId));

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <CompleteSignup />
    </div>
  );
}
