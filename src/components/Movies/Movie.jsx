import React, { Component } from "react";

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
      <div className="card" key={this.state.movie.id}>
        {<img src="" alt="movie cover" /> && (
          <img
            src={`https://image.tmdb.org/t/p/w200/${this.state.movie.poster_path}`}
            alt={this.state.movie.title}
          />
        )}
      </div>
    ) : (
      <h1>Movie not found</h1>
    );
    return <div className="content">{movie}</div>;
  }
}

export default Movie;
