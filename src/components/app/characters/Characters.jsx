import React from 'react';
import PropTypes from 'prop-types';

const Characters = ({ name, image }) => (
  <figure>
    <img src={image} alt={name} />
    <figcaption>{name}</figcaption>
  </figure>
);

Characters.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string
};

export default Characters;
