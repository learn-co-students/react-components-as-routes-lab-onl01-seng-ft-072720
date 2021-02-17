import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const renderDirector = (director) => {
    return (
      <div>
        <h2>{director.name}</h2>
        <ul>
          {director.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>
    )
  }

  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => renderDirector(director))}
    </div>
  );
}

export default Directors
