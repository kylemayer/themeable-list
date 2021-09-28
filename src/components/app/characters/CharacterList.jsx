import React from 'react';
import { useAvatars } from '../../../services/useAvatars';
import Characters from './Characters';
import '../../../styles/main.css';

const CharacterList = () => {
  const { avatars } = useAvatars();

  return (
    <ul aria-label="avatars">
      {avatars.map((avatar) => (
        <li key={avatar.name}>
          <Characters image={avatar.image} name={avatar.name} />
        </li>
      ))}
    </ul>
  );
};

export default CharacterList;
