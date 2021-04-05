import React from 'react';
import PropTypes from 'prop-types';

function Movie({ title }){
  return (
    <div>
      <h4>{Title}</h4>
      <h3>{year}</h3>
      <em>{rating}</em>
    </div> 
  );
}

Movie.propType = {
  title : PropTypes.string.isRequired,
  year : PropTypes.number.isRequired,
  rating : PropTypes.number.isRequired,
};

export default Movie;