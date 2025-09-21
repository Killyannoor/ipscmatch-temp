import MatchDetail from "@/components/Custom/MatchDetails";
import { PrismaClient } from "../../../../generated/prisma";
import SignupTable from "@/components/Custom/MatchStatistics";
import SquadRegistrationsTable from "@/components/Match/SquadRegistrationsTable";

const prisma = new PrismaClient();

export default async function MatchesPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  let match = null;

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

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {match && <MatchDetail match={match} />}

      <SignupTable squads={match.squads} />

      {/* Todo: show this when user has signed up for this match */}
      <SquadRegistrationsTable squads={match.squads} />
    </div>
  );
}
