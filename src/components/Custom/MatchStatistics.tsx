"use client";

import { formatDayAndTime, formatTime } from "@/lib/date";
import { SquadWithRegistrations } from "@/lib/types";
import CountdownButton from "./CountdownButton";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

const SignupTable = ({
  squads,
  signupDeadline,
  matchId,
}: {
  squads: SquadWithRegistrations[];
  signupDeadline: Date;
  matchId: number;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    router.refresh();
    const error = searchParams.get("error");

    if (error) {
      if (error === "squad-vol") {
        toast.error("De squad is vol. Selecteer een andere squad");
      }
    }
  }, [router, searchParams]);

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
            <th className="border-b p-2 text-center w-[180px]">Status</th>
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
              <td className="text-center">
                <CountdownButton
                  signupDeadline={signupDeadline}
                  squadId={squad.id}
                  isFull={squad.matchRegistrations.length >= squad.capacity}
                  matchId={matchId}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SignupTable;
