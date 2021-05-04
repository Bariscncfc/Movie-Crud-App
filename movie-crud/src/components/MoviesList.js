import React from "react";
import PropTypes from "prop-types";

const MoviesList = ({ movies }) => {
  const emptyMessage = <p>Film Bulunamadı</p>;

  const moviesList = <p>Movies List</p>;

  return <div>{Array.prototype.length === 0 ? emptyMessage : moviesList}</div>;
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesList;
