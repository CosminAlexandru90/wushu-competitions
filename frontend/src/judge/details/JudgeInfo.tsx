import React from 'react';

export const JudgeInfo: React.FC = () => {
  return (
    <div className={'flex flex-col items-center justify-center'}>
      <h2>Judge info</h2>
      <ul>
        <li>Nume: Grindeanu</li>
        <li>Prenume: Sonia</li>
        <li>Data nasterii: 25.08.1992</li>
        <li>Club: A.C.S. Jad</li>
        <li>Telefon: 0730944203</li>
        <li>Email: sonia.grindeanu@gmail.com</li>
      </ul>
    </div>
  );
};