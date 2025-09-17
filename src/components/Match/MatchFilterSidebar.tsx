import React from "react";

const MatchFilterSidebar = () => {
  return (
    <aside className="bg-white rounded-xl shadow-md p-4 h-fit">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>

      <div className="mb-4">
        <h3 className="font-medium mb-2">Type wedstrijd</h3>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" /> Handgun
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" /> Rifle
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" /> Shotgun
          </label>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-medium mb-2">Level</h3>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" /> Level 1
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" /> Level 2
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" /> Level 3
          </label>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-medium mb-2">Land</h3>
        <select className="w-full border rounded-lg px-2 py-1">
          <option>Alle</option>
          <option>Netherlands</option>
          <option>Belgium</option>
          <option>Germany</option>
        </select>
      </div>
    </aside>
  );
};

export default MatchFilterSidebar;
