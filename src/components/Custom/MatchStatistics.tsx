import React from "react";
import Link from "next/link";

const registrationStats = [
  { time: "zaterdag 8:00", total: 10, used: 0, free: 10 },
  { time: "zaterdag 8:00", total: 10, used: 0, free: 10 },
  { time: "zaterdag 9:30", total: 10, used: 1, free: 9 },
  { time: "zaterdag 13:00", total: 10, used: 0, free: 10 },
  { time: "zaterdag 13:00", total: 10, used: 0, free: 10 },
  { time: "zaterdag 14:30", total: 10, used: 0, free: 10 },
  { time: "zondag 8:00", total: 10, used: 0, free: 10 },
  { time: "zondag 8:00", total: 10, used: 1, free: 9 },
  { time: "zondag 9:30", total: 10, used: 0, free: 10 },
  { time: "zondag 13:00", total: 10, used: 0, free: 10 },
];

const MatchStatistics = () => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
      <h3 className="text-xl font-bold text-gray-800 mb-4">
        Registratie statistieken
      </h3>
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border-b p-2 text-left">Tijdslot</th>
            <th className="border-b p-2 text-right">Startplaatsen</th>
            <th className="border-b p-2 text-right">Gebruikt</th>
            <th className="border-b p-2 text-right">Vrij</th>
            <th className="border-b p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {registrationStats.map((slot, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="border-b p-2">{slot.time}</td>
              <td className="border-b p-2 text-right">{slot.total}</td>
              <td className="border-b p-2 text-right">{slot.used}</td>
              <td
                className={`border-b p-2 text-right ${
                  slot.free > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {slot.free}
              </td>
              <td className="border-b p-2 text-center">
                {slot.free > 0 ? (
                  <Link href={`/matches/${1}/aanmelden`}>
                    <div className=" p-1 bg-green-300 rounded-md">
                      Aanmelden
                    </div>
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
