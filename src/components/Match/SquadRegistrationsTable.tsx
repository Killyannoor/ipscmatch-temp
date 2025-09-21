import { SquadWithRegistrationsAndPlayer } from "@/lib/types";

const SquadRegistrationsTable = ({
  squads,
}: {
  squads: SquadWithRegistrationsAndPlayer[];
}) => {
  return (
    <div className="space-y-8">
      {squads.map((squad, idx) => (
        <div
          key={idx}
          className="bg-white shadow-lg rounded-xl border border-gray-200 overflow-x-auto mx-auto p-6"
        >
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            {squad.name} – {squad.matchRegistrations.length}/{squad.capacity}{" "}
            deelnemers
          </h3>

          {squad.matchRegistrations.length > 0 ? (
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="border-b p-2 text-left w-[200px]">Naam</th>
                  {/* <th className="border-b p-2 text-left w-[180px]">Email</th> */}
                  {/* <th className="border-b p-2 text-left w-[120px]">Telefoon</th> */}
                  <th className="border-b p-2 text-left w-[120px]">
                    Registratiedatum
                  </th>
                </tr>
              </thead>
              <tbody>
                {squad.matchRegistrations.map((reg, regIdx) => (
                  <tr key={regIdx} className="hover:bg-gray-50">
                    <td className="border-b p-2">{reg.player.memberName}</td>
                    {/* <td className="border-b p-2">{reg.player.email}</td> */}
                    {/* <td className="border-b p-2">{reg.player.phone}</td> */}
                    <td className="border-b p-2">
                      {new Date(reg.createdAt).toLocaleDateString("nl-NL", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500 italic">Geen spelers aangemeld</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default SquadRegistrationsTable;
