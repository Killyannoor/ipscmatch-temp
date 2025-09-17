import MatchSummary from "@/components/Custom/MatchSummary";
import SquadSignUp from "@/components/Custom/SquadSignup";
import MatchCard from "@/components/Match/MatchCard";
import { matches } from "@/lib/data";

export default async function Matches({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <MatchCard match={matches[0]} showInfo />
      <SquadSignUp />
    </div>
  );
}
