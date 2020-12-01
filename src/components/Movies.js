import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.forEach((movie) =>{
          return(<div>
            movie.title, movie.time
            <ul>
            movie.genre.forEach((genre) =>( 
              return(<li> genre </li>)
            ))
            </ul>
          </div>)

        })}
    </div>
  );
};

export default Movies;
