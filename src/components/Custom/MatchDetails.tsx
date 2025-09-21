import { Squad } from "../../../generated/prisma";
import MatchCard from "../Match/MatchCard";
import { MatchWithSquadsAndRegistrations } from "@/lib/types";

export default function MatchDetails({
  match,
  selectedSquad,
}: {
  match: MatchWithSquadsAndRegistrations;
  selectedSquad?: Squad | null;
}) {
  return <MatchCard match={match} showInfo selectedSquad={selectedSquad} />;
}
