import React from 'react';
import { useAvatars } from '../../../services/useAvatars';
import Characters from './Characters';
import '../../../styles/main.css';
import { useMode } from '../../context/ModeProvider';

const CharacterList = () => {
  const { avatars } = useAvatars();
  const mode = useMode();

  return (
    <ul
      style={
        mode
          ? { backgroundColor: 'white', color: '#3B3B3B' }
          : { backgroundColor: '#3B3B3B', color: 'white' }
      }
    >
      {avatars.map((avatar) => (
        <li key={avatar.name}>
          <Characters image={avatar.image} name={avatar.name} />
        </li>
      ))}
    </ul>
  );
};

export default CharacterList;
