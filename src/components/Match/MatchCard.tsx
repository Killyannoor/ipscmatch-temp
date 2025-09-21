import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Clock, Target, Star } from "lucide-react";
import MatchSummary from "../Custom/MatchSummary";
import { formatDateTime, formatDate } from "@/lib/date";
import { MatchWithSquadsAndRegistrations } from "@/lib/types";

type MatchCardProps = {
  match: MatchWithSquadsAndRegistrations;
  showInfo?: boolean;
  onSignup?: () => void;
};

export default function MatchCard({
  match,
  onSignup,
  showInfo = false,
}: MatchCardProps) {
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

  const signups = match.squads.reduce((acc, squad) => {
    return acc + squad.matchRegistrations.length;
  }, 0);

  return (
    <Card className="flex flex-col md:flex-row items-center gap-4 p-4 rounded-2xl shadow-lg hover:shadow-xl transition relative">
      {match.country && (
        <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/80 backdrop-blur-sm border px-3 py-1 rounded-full shadow">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg"
            alt={match.country}
            className="w-5 h-5 "
          />

          <span className="text-sm font-medium">{match.country}</span>
        </div>
      )}
      <div>
        <img
          src={`${match.logoPath!}`}
          alt={`${match.name} logo`}
          className="w-full h-full object-contain rounded-xl max-h-[150px]"
        />
      </div>

      <CardContent className="flex flex-col flex-1 space-y-2 self-start">
        <h2 className="text-xl font-bold">{match.name}</h2>

        <div
          className={`text-gray-600 text-sm mr-4 ${
            !showInfo && "line-clamp-2"
          }`}
        >
          {match.description}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            Datum: {formatDate(match.startDate)} - {formatDate(match.endDate)}
          </div>

          <div
            className={`flex items-center ${
              signups === match.capacity ? "text-red-600" : "text-gray-600"
            }`}
          >
            <Users className="w-4 h-4 mr-2" />
            {signups} / {match.capacity} plaatsen
          </div>

          <div className="flex items-center text-gray-600">
            <Target className="w-4 h-4 mr-2" />
            Wapentype: {match.weaponType}
          </div>

          <div className="flex items-center text-gray-600">
            <Star className="w-4 h-4 mr-2" />
            Level: {match.level}
          </div>

          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            Deadline: {formatDateTime(match.signupDeadline)}
          </div>

          {/* {match.selectedSquad ? (
            <div className="flex items-center text-green-600">
              <CalendarCheck className="w-4 h-4 mr-2" />
              Ingeschreven: squad {match.selectedSquad}
            </div>
          ) : (
            <div className="flex items-center text-gray-600">
              <FileSignature className="w-4 h-4 mr-2" />
              Niet ingeschreven
            </div>
          )} */}
        </div>

        {!showInfo && (
          <div className="mt-4 flex justify-end">
            <Button className="cursor-pointer" onClick={onSignup}>
              Details
            </Button>
          </div>
        )}

        {showInfo && <MatchSummary matchInfo={matchInfo} />}
      </CardContent>
    </Card>
  );
}
