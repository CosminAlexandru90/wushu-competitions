import React from 'react';

export const CourseInfo: React.FC = () => {

  const course={
    name: 'Curs arbitri 2024',
    start_date: '2019-02-02',
    end_date: '2019-02-02',
    host: 'Grindeanu Sonia',
    participants: ['Alexandru Cosmin', 'Zsamolo Giuliano', 'Gurbanescu Florin'],
    link: 'https://www.youtube.com'
  }
  return (
    <div className={'flex flex-col p-8 h-full w-full bg-amber-900/30 m-2 rounded-xl'}>
      <h2>{course.name} info</h2>
      <ul>
        <li>Start date: {course.start_date}</li>
        <li>End date: {course.end_date}</li>
        <li>Host: {course.host}</li>
        <li>Participants: {course.participants}</li>
        <li>Link: <a href={course.link} target={'_blank'}>{course.link}</a></li>
      </ul>
    </div>
  );
};