import React from 'react';
import {data} from "./participantsDataSorted";

export const CompetitionInfo: React.FC = () => {
    return (
      <div className={'flex flex-col px-8 py-4 h-full w-full'}>
        <h2 className={'my-2'}>CAMPIONAT NAȚIONAL YONGCHUNQUAN (WING CHUN)</h2>
        <table className="min-w-[1000px] w-full table-auto border border-gray-300 shadow-sm rounded-lg overflow-hidden bg-amber-950/30">
          <thead className="bg-amber-800/30 text-left text-sm uppercase tracking-wider">
          <tr>
            <th className="px-2 py-2">Rank</th>
            <th className="px-2 py-2">Name</th>
            <th className="px-2 py-2">Event</th>
            <th className="px-2 py-2">Sex</th>
            <th className="px-2 py-2">Category</th>
            <th className="px-2 py-2">Club</th>
            <th className="px-2 py-2">Score</th>
            <th className="px-2 py-2">Deduction</th>
            <th className="px-2 py-2">Bonus</th>
            <th className="px-2 py-2">J1</th>
            <th className="px-2 py-2">J2</th>
            <th className="px-2 py-2">J3</th>
            <th className="px-2 py-2">J4</th>
            <th className="px-2 py-2">Note</th>
          </tr>
          </thead>
          <tbody>
          {data.map((athlete: any) => (
            <tr
              key={athlete.id}
              className={
                athlete.note === "Did not participate"
                  ? "bg-red-950/30 text-white/50"
                  : ""
              }
            >
              <td className="px-2 py-1">{athlete.rank}</td>
              <td className="px-2 py-1">{athlete.name}</td>
              <td className="px-2 py-1 capitalize">{athlete.event}</td>
              <td className="px-2 py-1">{athlete.sex}</td>
              <td className="px-2 py-1 capitalize">{athlete.category}</td>
              <td className="px-2 py-1">{athlete.club}</td>
              <td className="px-2 py-1">{athlete.score}</td>
              <td className="px-2 py-1">{athlete.deduction}</td>
              <td className="px-2 py-1">{athlete.bonus}</td>
              <td className="px-2 py-1">{athlete.judge1}</td>
              <td className="px-2 py-1">{athlete.judge2}</td>
              <td className="px-2 py-1">{athlete.judge3}</td>
              <td className="px-2 py-1">{athlete.judge4}</td>
              <td className="px-2 py-1 italic">{athlete.note}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    );
};