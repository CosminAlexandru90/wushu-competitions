import React, {useContext} from 'react';
import {LuArchive, LuBrain, LuDog, LuLogOut, LuNotebookPen, LuSchool, LuShirt} from "react-icons/lu";
import {UserContext} from "../session/UserContext.tsx";

export const Navigation: React.FC = () => {
    const {roles}= useContext(UserContext);
    return (
      <nav className={'flex flex-col justify-between p-8 w-80 bg-sky-950/30 rounded-xl my-2'}>
          <ol className={'flex flex-col gap-3'}>
              {roles.includes('judge') && <li><a href="/judge" className={'text-2xl flex flex-row gap-2 items-center'}><LuNotebookPen />Judge</a></li>}
              <li><a href="/competition" className={'text-2xl flex flex-row gap-2 items-center'}><LuArchive />Competitions</a></li>
              <li><a href="/course"  className={'text-2xl flex flex-row gap-2 items-center'}><LuDog />Courses</a></li>
            <hr/>
              <li><a href="/athlete" className={'text-2xl flex flex-row gap-2 items-center'}><LuShirt />Athletes</a></li>
              <li><a href="/coach" className={'text-2xl flex flex-row gap-2 items-center'}><LuBrain />Coaches</a></li>
              <li><a href="/club"  className={'text-2xl flex flex-row gap-2 items-center'}><LuSchool />Clubs</a></li>
          </ol>

        <a href="/logout" className={'text-2xl flex flex-row gap-2 items-center my-2'}><LuLogOut />Logout</a>
      </nav>
    );
};