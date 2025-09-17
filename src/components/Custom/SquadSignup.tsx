import Link from "next/link";

export default function SquadSignUp() {
  const squads = [
    {
      id: 1,
      name: "Squad 1",
      time: "zaterdag 8:00",
      players: ["Speler A", "Speler B", "Speler C"],
    },
    {
      id: 2,
      name: "Squad 2",
      time: "zaterdag 9:30",
      players: ["Speler D", "Speler E"],
    },
    {
      id: 3,
      name: "Squad 3",
      time: "zaterdag 13:00",
      players: ["Speler F", "Speler G", "Speler H", "Speler I"],
    },
    { id: 4, name: "Squad 4", time: "zondag 8:00", players: [] },
    { id: 5, name: "Squad 5", time: "zondag 9:30", players: ["Speler J"] },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-xl font-semibold text-center mb-4">Kies je Squad</h1>
      <div className="divide-y border rounded-md">
        {squads.map((squad) => (
          <div
            key={squad.id}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 py-2"
          >
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-gray-900">
                {squad.name}
              </div>
              <div className="text-xs text-gray-500">{squad.time}</div>
              <div className="mt-1 text-xs text-gray-700 truncate">
                {squad.players.length > 0 ? (
                  squad.players.join(", ")
                ) : (
                  <span className="italic text-gray-400">
                    Nog geen spelers ingeschreven
                  </span>
                )}
              </div>
            </div>

            <div className="mt-2 sm:mt-0 sm:ml-4 flex-shrink-0">
              <Link
                href={`/matches/${0}/aanmelden/bevestigen`}
                className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 h-auto text-sm rounded-md "
              >
                Inschrijven
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
