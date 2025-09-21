import Link from "next/link";
import { formatDayAndTime, formatTime } from "@/lib/date";
import { SquadWithRegistrations } from "@/lib/types";

const SignupTable = ({ squads }: { squads: SquadWithRegistrations[] }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl border border-gray-200 overflow-x-auto mx-auto p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">
        Registratie statistieken
      </h3>
      <table className="min-w-full border-collapse text-sm">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="border-b p-2 text-left w-[220px]">Tijdsquad</th>
            <th className="border-b p-2 text-left w-[100px]">Squad</th>
            <th className="border-b p-2 text-right w-[120px]">Startplaatsen</th>
            <th className="border-b p-2 text-right w-[100px]">Gebruikt</th>
            <th className="border-b p-2 text-right w-[100px]">Vrij</th>
            <th className="border-b p-2 text-center w-[120px]">Status</th>
          </tr>
        </thead>
        <tbody>
          {squads.map((squad, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="border-b p-2 text-left">
                {formatDayAndTime(squad.startTime)} –{" "}
                {formatTime(squad.endTime)}
              </td>
              <td className="border-b p-2 text-left">{squad.name}</td>
              <td className="border-b p-2 text-right">{squad.capacity}</td>
              <td className="border-b p-2 text-right">
                {squad.matchRegistrations.length}
              </td>
              <td
                className={`border-b p-2 text-right ${
                  squad.matchRegistrations.length < squad.capacity
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {squad.capacity - squad.matchRegistrations.length}
              </td>
              <td className="border-b p-2 text-center">
                {squad.matchRegistrations.length < squad.capacity ? (
                  <Link href={`/matches/${1}/aanmelden`}>
                    <span className="px-3 py-1 text-sm bg-green-500 text-white rounded-md hover:bg-green-600">
                      Aanmelden
                    </span>
                  </Link>
                ) : (
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                    Vol
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SignupTable;
