import MatchCard from "../Match/MatchCard";
import MatchStatistics from "./MatchStatistics";
import { Prisma } from "../../../generated/prisma";

export type MatchWithSquads = Prisma.MatchGetPayload<{
  include: {
    squads: true;
  };
}>;

export default function MatchDetails({ match }: { match: MatchWithSquads }) {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <MatchCard match={match} showInfo />
      <MatchStatistics squads={match.squads} />
    </div>
  );
}
