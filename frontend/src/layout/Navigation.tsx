import React from 'react';

export const Navigation: React.FC = () => {
    return (
      <nav className={'p-4 w-80 bg-red-200'}>
          <ol>
              <li><a href="/user">Users</a></li>
              <li><a href="/judge">Judges</a></li>
              <li><a href="/competition">Competitions</a></li>
              <li><a href="/course">Courses</a></li>
          </ol>
      </nav>
    );
};