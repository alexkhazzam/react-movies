import React from "react";
import "../styles/main.css";

const Movie = (props) => {
  return (
    <div className="movie-section">
      <p onClick={props.movieClicked} className="movie">
        {props.movie}
      </p>
      <p className="genre">{props.genre}</p>
      <p className="rating">{props.rating}</p>
      <input
        onChange={props.movieChange}
        placeholder="enter new movie title"
      ></input>
      <input placeholder="change movie genre" onChange={props.changeGenre} />
      <input placeholder="change movie rating" onChange={props.changeRating} />
    </div>
  );
};

export default Movie;
