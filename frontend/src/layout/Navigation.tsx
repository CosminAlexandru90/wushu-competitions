import React from 'react';
import {LuArchive, LuCircleUserRound, LuDog, LuLogOut, LuNotebookPen} from "react-icons/lu";

export const Navigation: React.FC = () => {
    return (
      <nav className={'flex flex-col justify-between p-4 w-80 bg-red-200'}>
          <ol>
            <li><a href="/user" className={'text-3xl flex flex-row gap-2 items-center'}><LuCircleUserRound />Users</a></li>
              <li><a href="/judge" className={'text-3xl flex flex-row gap-2 items-center'}><LuNotebookPen />Judge</a></li>
              <li><a href="/competition" className={'text-3xl flex flex-row gap-2 items-center'}><LuArchive />Competitions</a></li>
              <li><a href="/course"  className={'text-3xl flex flex-row gap-2 items-center'}><LuDog />Courses</a></li>
          </ol>

        <a href="/logout" className={'text-2xl flex flex-row gap-2 items-center'}><LuLogOut />Logout</a>
      </nav>
    );
};