import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const renderMovie = (movie) => {
    return (
      <div>
        <h2>{movie.title}</h2>
        <h5>{movie.time} Minutes</h5>
        <ul>
          {movie.genres.map(genre => <li>{genre}</li>)}
        </ul>
      </div>
    )
  }

  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => renderMovie(movie))}
    </div>
  );
};

export default Movies;
