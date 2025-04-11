import React from 'react';

export const CourseList: React.FC = () => {
    return (
      <div className={'flex flex-col p-4 h-full w-full'}>
        <h2>Courses</h2>
        <ul>
          <a href={'/course/id'}><li>Judges course 2025</li></a>
          <li>Judges course 2024</li>
          <li>Judges course 2023</li>
        </ul>
      </div>
    );
};