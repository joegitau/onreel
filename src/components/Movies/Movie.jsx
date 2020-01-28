import React, { Component } from 'react';
import './movies.css';
import NoImage from '../../img/movie-reel.png';

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
      <div
        className="item"
        key={this.state.movie.id}
        style={{
          backgroundImage: `url( https://image.tmdb.org/t/p/w1280/${this.state.movie.backdrop_path} )`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="item-body">
          {<img src={NoImage} alt="movie cover" /> && (
            <img
              src={`https://image.tmdb.org/t/p/w342/${this.state.movie.poster_path}`}
              alt={this.state.movie.title}
            />
          )}
          <div className="item-body-content">
            <h4>{this.state.movie.title}</h4>
            <h4>{this.state.movie.release_date}</h4>
            <p>{this.state.movie.overview}</p>
          </div>
        </div>
      </div>
    ) : (
      <h1>Movie not found</h1>
    );
    return (
      <div className="content">
        <div className="inner-content">{movie}</div>
      </div>
    );
  }
}

export default Movie;
