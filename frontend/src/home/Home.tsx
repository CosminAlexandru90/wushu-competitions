import React, {useContext} from 'react';
import {UserContext} from "../session/UserContext.tsx";

export const Home: React.FC = () => {
  const {user}=useContext(UserContext);
    return (
      <div className={'bg-red-900/30 rounded-xl m-2 p-4 h-full w-full text-center'}>
          <h2>Welcome, {user?.preferred_username ?? 'guest'}</h2>
          <h2>This is a H2</h2>
          <h3>This is a H3</h3>
          <h4>This is a H4</h4>
          <p>This is a P</p>
      </div>
    );
};