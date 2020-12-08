import React from 'react';
import { movies } from '../data';


//This component should render the text Movies Page in an <h1>, and 
//make a new <div> for each movie. The <div> should contain the movie's title,
// time and a <ul> with a list of its genres.
const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
        <div key={index}>
          <h3>Title: {movie.title}</h3>
          <h3>Time: {movie.time}</h3>
          <p>Genres:</p>
          <ul>
            {movie.genres.map((genre, index) => (
              <li key={index}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;
