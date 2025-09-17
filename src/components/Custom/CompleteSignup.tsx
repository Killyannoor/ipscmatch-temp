import { matches } from "@/lib/data";
import MatchCard from "../Match/MatchCard";

export default function CompleteSignup() {
  const squad = {
    name: "Squad 1",
    time: "Zaterdag 8:00",
    players: ["Speler A", "Speler B", "Speler C"],
  };

  return (
    <>
      <div className="flex flex-col self-center items-center">
        <h2 className="font-bold self-center">Je inschrijving is bevestigd!</h2>
        <p>
          Vul de volgende gegevens in om je inschrijving voor de wedstrijd
          volledig af te ronden.
        </p>
      </div>

      <MatchCard match={matches[0]} showInfo />
      <div className="max-w-5xl mx-auto font-sans rounded-2xl shadow-lg bg-white p-6 space-y-4 text-sm border-[1px]">
        <h2 className="text-lg font-semibold text-center">
          Wedstrijdgegevens voltooien
        </h2>

        <div className="border rounded-xl p-3 space-y-1">
          <h3 className="font-medium text-gray-800 text-sm">Squad gegevens</h3>
          <div>
            <strong>Naam:</strong> {squad.name}
          </div>
          <div>
            <strong>Tijd:</strong> {squad.time}
          </div>
          <div>
            <strong>Spelers:</strong> {squad.players.join(", ")}
          </div>
        </div>

        <div className="border rounded-xl p-3">
          <h3 className="font-medium mb-1 text-sm">Niveau</h3>
          <div className="flex flex-wrap gap-4">
            {["A", "B", "C", "U"].map((level) => (
              <label key={level} className="flex items-center">
                <input type="radio" name="firearm" className="mr-2" /> {level}
              </label>
            ))}
          </div>
        </div>

        <div className="border rounded-xl p-3">
          <h3 className="font-medium mb-1 text-sm">Power factor</h3>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input type="radio" name="power" className="mr-2" /> Minor
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="power"
                className="mr-2"
                defaultChecked
              />{" "}
              Major
            </label>
          </div>
        </div>

        {/* Division */}
        <div className="border rounded-xl p-3">
          <h3 className="font-medium mb-1 text-sm">Division</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-1">
            {[
              "Production",
              "Standard",
              "Open",
              "Revolver",
              "Classic",
              "Prod.Optics",
              "PCC",
            ].map((div) => (
              <label key={div} className="flex items-center">
                <input
                  type="radio"
                  name="division"
                  className="mr-2"
                  defaultChecked={div === "Open"}
                />{" "}
                {div}
              </label>
            ))}
          </div>
        </div>

        <div className="border rounded-xl p-3">
          <h3 className="font-medium mb-1 text-sm">Category</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-1">
            {[
              "Overall",
              "Junior (<18 jaar)",
              "Senior (50–59 jaar)",
              "Supersenior (>60 jaar)",
              "Dames",
            ].map((cat, i) => (
              <label key={cat} className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  className="mr-2"
                  defaultChecked={i === 0}
                />{" "}
                {cat}
              </label>
            ))}
          </div>
        </div>

        <div className="border rounded-xl p-3">
          <h3 className="font-medium mb-1 text-sm">
            Bericht aan wedstrijdorganisatie
          </h3>
          <textarea
            className="border w-full p-2 rounded-md text-sm"
            rows={3}
            placeholder="Typ hier je bericht..."
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button className="bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded-lg text-white text-sm shadow">
            Bevestigen
          </button>
        </div>
      </div>
    </>
  );
}
