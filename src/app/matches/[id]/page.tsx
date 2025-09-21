import MatchDetail from "@/components/Custom/MatchDetails";
import { PrismaClient } from "../../../../generated/prisma";
import SignupTable from "@/components/Custom/MatchStatistics";
import SquadRegistrationsTable from "@/components/Match/SquadRegistrationsTable";
import { getSession, logout } from "@/app/actions/actions";
import { redirect, RedirectType } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

const prisma = new PrismaClient();
export const revalidate = 0;

export default async function MatchesPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  let match = null;
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/");
  }

  match = await prisma.match.findUnique({
    where: { id: parseInt(id) },
    include: {
      squads: {
        include: {
          matchRegistrations: {
            include: {
              player: true,
            },
          },
        },
      },
    },
  });

  if (!match) return <div>Geen wedstrijd gevonden</div>;

  const existingRegistration = await prisma.matchRegistration.findFirst({
    where: {
      playerId: session.id,
      squad: {
        matchId: match.id,
      },
    },
    include: {
      squad: true,
    },
  });

  const completedRegistration =
    existingRegistration &&
    existingRegistration.level !== null &&
    existingRegistration.powerFactor !== null &&
    existingRegistration.division !== null &&
    existingRegistration.category !== null;

  const navigateToCompleteRegistration = async () => {
    "use server";
    redirect(`/matches/${match.id}/aanmelden/${existingRegistration?.id}`);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 ">
      <div className="flex items-center justify-between">
        <h2 className="">Hallo, {session.username}</h2>
        <form action={logout}>
          <div className="flex items-center gap-2 cursor-pointer">
            <LogOut />
            <button className="cursor-pointer">Uitloggen</button>
          </div>
        </form>
      </div>
      <div className="space-y-8 mt-4">
        {match && (
          <MatchDetail
            match={match}
            selectedSquad={existingRegistration?.squad}
          />
        )}

        {!completedRegistration && existingRegistration && (
          <div className="flex flex-col items-center space-y-2 text-center p-4 bg-yellow-50 rounded-lg">
            <p className="text-sm text-gray-700 font-bold">
              Je staat ingeschreven, maar je registratie is nog niet compleet.
            </p>
            <form action={navigateToCompleteRegistration}>
              <Button className="bg-amber-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-amber-700">
                Registratie afronden
              </Button>
            </form>
          </div>
        )}
        {existingRegistration ? (
          <SquadRegistrationsTable squads={match.squads} />
        ) : (
          <SignupTable
            matchId={match.id}
            squads={match.squads}
            signupDeadline={match.signupDeadline}
          />
        )}
      </div>
    </div>
  );
}
