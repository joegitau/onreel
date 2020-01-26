import React, { Component } from "react";
import "./movies.css";
import NoImage from "../../img/movie-reel.png";

class Movie extends Component {
  state = {
    movie: {}
  };

  fetchMovieInfo = async () => {
    const url = `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=30291ba20f46e36961edb5c6f4a6a811`;
    const data = await fetch(url);
    const movie = await data.json();
    console.log(movie);
    this.setState({ movie });
  };

  componentDidMount() {
    this.fetchMovieInfo();
  }

  render() {
    const movie = this.state.movie ? (
      <div className="item" key={this.state.movie.id}>
        <div className="item-header">
          {<img src={NoImage} alt="movie cover" /> && (
            <img
              src={`https://image.tmdb.org/t/p/w500/${this.state.movie.poster_path}`}
              alt={this.state.movie.title}
            />
          )}
        </div>
        <div className="item-body">
          <h4>{this.state.movie.title}</h4>
          <h4>{this.state.movie.release_date}</h4>
          <p>{this.state.movie.overview}</p>
        </div>
      </div>
    ) : (
      <h1>Movie not found</h1>
    );
    return <div className="content">{movie}</div>;
  }
}

export default Movie;
