"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { formatDateTime } from "@/lib/date";

interface CountdownButtonProps {
  signupDeadline: Date;
  squadId: number;
  isFull: boolean;
  matchId: number;
}

export default function CountdownButton({
  signupDeadline,
  squadId,
  isFull,
  matchId,
}: CountdownButtonProps) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (isFull) {
    return (
      <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">
        Vol
      </span>
    );
  }

  if (now === null) {
    return (
      <span className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-md">
        {formatDateTime(signupDeadline)}
      </span>
    );
  }

  const deadline = new Date(signupDeadline).getTime();
  const timeLeft = deadline - now;

  if (timeLeft > 1000 * 60 * 60) {
    return (
      <span className="px-3 py-1 text-sm bg-gray-100 text-gray-800 rounded-md">
        {formatDateTime(signupDeadline)}
      </span>
    );
  }

  if (timeLeft > 0) {
    const hours = String(Math.floor(timeLeft / (1000 * 60 * 60))).padStart(
      2,
      "0"
    );
    const minutes = String(
      Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
    ).padStart(2, "0");
    const seconds = String(
      Math.floor((timeLeft % (1000 * 60)) / 1000)
    ).padStart(2, "0");

    return (
      <button
        disabled
        className="px-3 py-1 text-sm bg-gray-300 text-white rounded-md cursor-not-allowed"
      >
        {hours}:{minutes}:{seconds}
      </button>
    );
  }

  return (
    <Link href={`/matches/${matchId}/aanmelden/${squadId}`}>
      <span className="px-3 py-1 text-sm bg-green-500 text-white rounded-md hover:bg-green-600">
        Aanmelden
      </span>
    </Link>
  );
}
