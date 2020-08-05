import React, { Component } from "react";
import Movies from "../components/Movies";
import "./App.css";

class App extends Component {
  state = {
    movies: [
      {
        movie: "Hunger Games",
        genre: "Dystopia/Action/Adventure",
        rating: "10/10",
      },
      {
        movie: "Divergent",
        genre: "Dystopia/Action/Adventure",
        rating: "10/10",
      },
      {
        movie: "The Last Guard",
        genre: "Action/Adventure",
        rating: "10/10",
      },
    ],
    renderingMovies: true,
  };

  movieList = null;
  movieLength = this.state.movies.length;

  changeMovieState = () => {
    this.setState({ renderingMovies: !this.state.renderingMovies });
    if (this.movieLength === 0) {
      return;
    } else {
      if (this.state.renderingMovies) {
        this.movieList = (
          <p>Movies are hidden. Toggle the button to make them visible.</p>
        );
      } else {
        this.movieList = null;
      }
    }
  };

  removeMovie = (index) => {
    const newMovieArr = [...this.state.movies];
    newMovieArr.splice(index, 1);
    this.setState({ movies: newMovieArr });
  };

  changeMovieName = (event, index) => {
    const newMovieList = [...this.state.movies];
    newMovieList[index].movie = event.target.value;
    this.setState({ movies: newMovieList });
  };

  changeMovieRating = (event, index) => {
    const newMovieList = [...this.state.movies];
    newMovieList[index].rating = event.target.value;
    this.setState({ movies: newMovieList });
  };

  changeMovieGenre = (event, index) => {
    const newMovieList = [...this.state.movies];
    newMovieList[index].genre = event.target.value;
    this.setState({ movies: newMovieList });
  };

  render() {
    if (this.state.renderingMovies) {
      this.movieList = (
        <Movies
          listOfMovies={this.state.movies}
          removeMovie={(index) => this.removeMovie(index)}
          changeMovieName={(event, index) => this.changeMovieName(event, index)}
          changeMovieRating={(event, index) =>
            this.changeMovieRating(event, index)
          }
          changeMovieGenre={(event, index) =>
            this.changeMovieGenre(event, index)
          }
        />
      );
      if (this.state.movies.length === 0) {
        this.movieList = <p>No movies were found...</p>;
      }
    }

    return (
      <div>
        <button onClick={() => this.changeMovieState()}>Toggle Movies</button>
        {this.movieList}
      </div>
    );
  }
}
export default App;
