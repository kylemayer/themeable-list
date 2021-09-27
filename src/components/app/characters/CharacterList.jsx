import React from 'react';
import { useAvatars } from '../../services/AvatarProvider';
import Characters from './Characters';

const CharacterList = () => {
  const characters = useAvatars();

  const avatarItems = characters.map((character) => (
    <li key={character.name}>
      <Characters {...character} />
    </li>
  ));
  return <ul>{avatarItems}</ul>;
};

export default CharacterList;
