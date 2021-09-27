import React from 'react';
import PropTypes from 'prop-types';

const Characters = ({ name, image }) => {

  return (
    <li>
      <figure>
        <img src={image} alt={name} />
        <figcaption>{name}</figcaption>
      </figure>
    </li>
  );
};

Characters.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default Characters;
