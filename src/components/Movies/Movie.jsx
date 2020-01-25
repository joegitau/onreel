import React from "react";
import { Link } from "react-router-dom";
import "./movies.css";

const Movie = ({ match }) => {
  return (
    <div className="content">
      <h1>Movie with id {match.params.id}</h1>
    </div>
  );
};

export default Movie;
