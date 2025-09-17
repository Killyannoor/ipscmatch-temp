import MatchSummary from "@/components/Custom/MatchSummary";
import SquadSignUp from "@/components/Custom/SquadSignup";
import MatchCard from "@/components/Match/MatchCard";
import { matches } from "@/lib/data";

export default async function Matches({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const match = matches.find((match) => match.id === parseInt(id));

  const matchInfo = {
    startDate: "19.09.2025",
    endDate: "21.09.2025",
    name: "KW Handgun Hoofddorp 2",
    location: "Hoofddorp",
    country: "NED",
    type: "Handgun",
    level: 2,
    maxParticipants: 120,
    available: 117,
    website: "https://www.svtfort.nl/",
    email: "kwhoofddorp@gmail.com",
    info: "Inschr geld €35,- op reknr NL66INGB0004711092 TNV sv t Fort. ovv Squad/mosnum. Graag klassering opgeven bij inschrijving — PCC onder Modified",
  };
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <MatchCard match={matches[0]} showInfo />

      <SquadSignUp />
    </div>
  );
}
