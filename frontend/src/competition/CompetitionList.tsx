import React from 'react';

export const CompetitionList: React.FC = () => {
    return (
      <div className={'flex flex-col p-4 h-full w-full'}>
        <h2>Competitions</h2>
        <ul>
          <a href={'/competition/id'}><li>CAMPIONAT NAȚIONAL YONGCHUNQUAN (WING CHUN)</li></a>
          <li>CAMPIONAT NAȚIONAL KUNGFU</li>
          <li>CAMPIONAT NAȚIONAL WUSHU</li>
        </ul>
      </div>
    );
};