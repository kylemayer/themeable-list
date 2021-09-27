import React from 'react';
import PropTypes from 'prop-types';
import { useMode } from '../../context/ModeProvider';

const Characters = ({ name, image }) => {
  const mode = useMode();
  return (
    <li
      style={
        mode
          ? { backgroundColor: 'white', color: '#3B3B3B' }
          : { backgroundColor: '#3B3B3B', color: 'white' }
      }
    >
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
