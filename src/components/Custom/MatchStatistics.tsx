import Link from "next/link";
import { Squad } from "../../../generated/prisma";
import { formatDayAndTime, formatTime } from "@/lib/date";

const MatchStatistics = ({ squads }: { squads: Squad[] }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 overflow-x-auto">
      <h3 className="text-xl font-bold text-gray-800 mb-4">
        Registratie statistieken
      </h3>
      <table className="min-w-full border-collapse text-sm">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="border-b p-2 text-left w-[220px]">Tijdslot</th>
            <th className="border-b p-2 text-left w-[100px]">Squad</th>
            <th className="border-b p-2 text-right w-[120px]">Startplaatsen</th>
            <th className="border-b p-2 text-right w-[100px]">Gebruikt</th>
            <th className="border-b p-2 text-right w-[100px]">Vrij</th>
            <th className="border-b p-2 text-center w-[120px]">Status</th>
          </tr>
        </thead>
        <tbody>
          {squads.map((slot, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="border-b p-2 text-left">
                {formatDayAndTime(slot.startTime)} – {formatTime(slot.endTime)}
              </td>
              <td className="border-b p-2 text-left">{slot.name}</td>
              <td className="border-b p-2 text-right">{slot.capacity}</td>
              <td className="border-b p-2 text-right">0</td>
              <td
                className={`border-b p-2 text-right ${
                  slot.capacity > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {slot.capacity}
              </td>
              <td className="border-b p-2 text-center">
                {slot.capacity > 0 ? (
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

export default MatchStatistics;
