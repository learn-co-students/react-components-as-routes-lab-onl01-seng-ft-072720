import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const renderActor = (actor) => {
    return (
      <div>
        <h3>{actor.name}</h3>
        <ul>
          {actor.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>
    )
  }
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => renderActor(actor))}
    </div>
  );
};

export default Actors;
