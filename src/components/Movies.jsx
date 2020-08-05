import React from "react";
import Movie from "./Movie/Movie";

const Movies = (props) => {
  return props.listOfMovies.map((movie, index) => {
    return (
      <Movie
        movieClicked={() => props.removeMovie(index)}
        movieChange={(event) => props.changeMovieName(event, index)}
        movie={movie.movie}
        genre={movie.genre}
        rating={movie.rating}
        changeGenre={(event) => props.changeMovieGenre(event, index)}
        changeRating={(event) => props.changeMovieRating(event, index)}
        key={index}
      />
    );
  });
};

export default Movies;
