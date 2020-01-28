import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './movies.css';
import NoImage from '../../img/movie-reel.png';

class Movies extends Component {
  state = { movies: [] };

  fetchMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=30291ba20f46e36961edb5c6f4a6a811`;
    const data = await fetch(url);
    const movies = await data.json();
    // console.log(movies.results);
    this.setState({ movies: movies.results });
  };

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return (
      <div className="content">
        <div className="content-header">
          <h1>All Movies</h1>
        </div>
        <div className="content-body">
          {this.state.movies.map(movie => (
            <Link to={`/movie/${movie.id}`}>
              <div className="item zoom" key={movie.id}>
                {<img src={NoImage} alt="movie cover" /> && (
                  <img
                    src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                    alt={movie.title}
                  />
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Movies;
