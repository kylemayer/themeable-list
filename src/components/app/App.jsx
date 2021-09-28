import React from 'react';
import CharacterList from '../app/characters/CharacterList';
import Header from '../header/Header';
import { useMode } from '../context/ModeProvider';

export default function App() {
  const mode = useMode();

  return (
    <div
      style={
        mode
          ? { backgroundColor: 'white', color: '#3B3B3B' }
          : { backgroundColor: '#3B3B3B', color: 'white' }
      }
    >
      <Header />
      <CharacterList />
    </div>
  );
}
