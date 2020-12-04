import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => {
        return <div>
          <h4>{actor.name}</h4>
          {actor.movies.map(movie => <li>{movie}</li>)}
        </div>
      })}
    </div>
  );
};

export default Actors;
