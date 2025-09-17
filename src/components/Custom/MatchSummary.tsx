import React from "react";

type MatchInfo = {
  website: string;
  email: string;
  info: string;
};

const MatchSummary = ({ matchInfo }: { matchInfo: MatchInfo }) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 mt-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
        <div>
          <p className="text-gray-500">Website</p>
          <a href={matchInfo.website} target="_blank" className="underline">
            {matchInfo.website}
          </a>
        </div>
        <div>
          <p className="text-gray-500">E-mail</p>
          <a href={`mailto:${matchInfo.email}`} className="underline">
            {matchInfo.email}
          </a>
        </div>
      </div>
      <div className="mt-4 text-sm text-gray-700">
        <p>{matchInfo.info}</p>
      </div>
    </div>
  );
};

export default MatchSummary;
