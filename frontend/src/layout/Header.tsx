import React, {useContext, useEffect} from 'react';
import {UserContext} from "../session/UserContext.tsx";

export const Header: React.FC = () => {
    const {user, roles}=useContext(UserContext);

    useEffect(()=>{
        console.log(user, roles);
    },[user, roles])

    return (
        <div className={'text-center bg-blue-950/30 rounded-xl my-2 p-6 w-full shadow-lg'}>
            {user && <p>Hello, {user.name}</p>}
      <a href={'/'}>
          <h1>WUSHU COMPETITIONS</h1>
      </a>
        </div>
    );
};