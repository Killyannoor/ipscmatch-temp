import MatchDetail from "@/components/Custom/MatchDetails";
import { PrismaClient } from "../../../../generated/prisma";
import SignupTable from "@/components/Custom/MatchStatistics";
import SquadRegistrationsTable from "@/components/Match/SquadRegistrationsTable";
import { getSession, logout } from "@/app/actions/actions";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

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

  return (
    <div className="max-w-5xl mx-auto p-6 ">
      <h2 className="">Hallo, {session.username}</h2>
      <form action={logout}>
        <button>uitloggen</button>
      </form>
      <div className="space-y-8 mt-4">
        {match && (
          <MatchDetail
            match={match}
            selectedSquad={existingRegistration?.squad}
          />
        )}

        {existingRegistration ? (
          <SquadRegistrationsTable squads={match.squads} />
        ) : (
          <SignupTable squads={match.squads} />
        )}
      </div>
    </div>
  );
}
