import React from "react";
import MovieCard from "./MovieCard";
import "./MovieCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Add from "./Add";
const MovieList = ({ movies, addMovie }) => {
  const MovieList = {};
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div>
        <button onClick={handleShow}>Add</button>
      </div>
      <div className="movie">
        <Add addMovie={addMovie} show={show} handleClose={handleClose} />
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
