import React from 'react';

export const JudgeList: React.FC = () => {
    return (
      <div className={'flex flex-col items-center justify-center'}>
        <h2>Judges</h2>
        <ul>
          <a href={'/judge/id'}><li>Petre Grindeanu</li></a>
          <li>Sonia Grindeanu</li>
          <li>Florin Gurbanescu</li>
        </ul>
      </div>
    );
};