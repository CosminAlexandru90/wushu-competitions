import React from 'react';

export const UserList: React.FC = () => {
    return (
        <div className={'flex flex-col p-4 h-full w-full'}>
          <h2>Users</h2>
            <h3>Judges</h3>
            <ul>
              <a href={'/user/id'}><li>Petre Grindeanu</li></a>
              <li>Sonia Grindeanu</li>
              <li>Florin Gurbanescu</li>
            </ul>
            <h3>Coaches</h3>
            <ul>
                <a href={'/user/id'}><li>Petre Grindeanu</li></a>
                <li>Sonia Grindeanu</li>
                <li>Florin Gurbanescu</li>
            </ul>
        </div>
    );
};