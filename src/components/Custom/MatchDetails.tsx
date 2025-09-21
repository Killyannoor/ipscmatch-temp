import MatchCard from "../Match/MatchCard";
import { MatchWithSquadsAndRegistrations } from "@/lib/types";

export default function MatchDetails({
  match,
}: {
  match: MatchWithSquadsAndRegistrations;
}) {
  return <MatchCard match={match} showInfo />;
}
