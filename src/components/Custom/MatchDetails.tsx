import { matches } from "@/lib/data";
import MatchCard from "../Match/MatchCard";
import MatchStatistics from "./MatchStatistics";

export default function MatchDetails() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <MatchCard match={matches[0]} showInfo />
      <MatchStatistics />
    </div>
  );
}
