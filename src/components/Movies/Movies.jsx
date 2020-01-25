import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./movies.css";

class Movies extends Component {
  state = { movies: [] };

  fetchMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=30291ba20f46e36961edb5c6f4a6a811`;
    const data = await fetch(url);
    const movies = await data.json();
    console.log(movies);
  };

  componentDidMount() {
    const movies = this.fetchMovies();
    this.setState({ movies });
  }

  render() {
    return (
      <div className="content">
        <h1>All Movies</h1>
      </div>
    );
  }
}

export default Movies;
