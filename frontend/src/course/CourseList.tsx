import React from 'react';

export const CourseList: React.FC = () => {
    return (
      <div className={'flex flex-col p-8 gap-4 h-full w-full bg-amber-900/30 m-2 rounded-xl'}>
        <h2>Courses</h2>
        <ul>
          <a href={'/course/id'}><li>Judges course 2025</li></a>
          <li>Judges course 2024</li>
          <li>Judges course 2023</li>
        </ul>
      </div>
    );
};