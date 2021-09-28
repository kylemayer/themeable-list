import React from 'react';
import { useMode, useDarkMode } from '../context/ModeProvider';

const Header = () => {
  const toggleMode = useDarkMode();
  const mode = useMode();
  return (
    <header style={{
      backgroundColor: mode ? 'white' : '#3B3B3B',
      color: mode ? '#3B3B3B' : 'white',
    }}>
      <button aria-label="theme" onClick={toggleMode}>
        Dark Mode!
      </button>
    </header>
  );
};

export default Header;

