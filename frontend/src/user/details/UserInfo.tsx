import React from 'react';

export const UserInfo: React.FC = () => {
    return (
        <div className={'flex flex-col items-center justify-center'}>
            <h2>User info</h2>
          <ul>
            <li>Last name: Grindeanu</li>
            <li>First name: Sonia</li>
            <li>Date of birth: 25.08.1992</li>
            <li>Club: A.C.S. Jad</li>
            <li>Phone: 0730944203</li>
            <li>Email: sonia.grindeanu@gmail.com</li>
          </ul>
        </div>
    );
};