import React from 'react';

export const CompetitionList: React.FC = () => {
    return (
      <div className={'flex flex-col gap-4 p-8 h-full w-full bg-amber-950/20 m-2 rounded-xl'}>
        <h2>Competitions</h2>
        <title></title>
        <ul>
          <a href={'/competition/id'}><li>CAMPIONAT NAȚIONAL YONGCHUNQUAN (WING CHUN)</li></a>
          <li>CAMPIONAT NAȚIONAL KUNGFU</li>
          <li>CAMPIONAT NAȚIONAL WUSHU</li>
        </ul>
      </div>
    );
};