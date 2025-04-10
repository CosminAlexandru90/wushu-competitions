import React from 'react';

export const UserList: React.FC = () => {
    return (
        <div className={'flex flex-col items-center justify-center w-full h-full'}>
          <h2>Users</h2>
            <ul>
              <a href={'/user/id'}><li>Petre Grindeanu</li></a>
              <li>Sonia Grindeanu</li>
              <li>Florin Gurbanescu</li>
            </ul>
        </div>
    );
};