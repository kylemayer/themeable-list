import React, { useState, useContext, createContext } from 'react';
import PropTypes from 'prop-types';

const ModeContext = createContext();

const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState(true);

  const toggleDarkMode = () => setMode((prevState) => !prevState);

  const setting = { mode, toggleDarkMode };

  return (
    <ModeContext.Provider value={setting}>{children}</ModeContext.Provider>
  );
};

export const useMode = () => {
  const { mode } = useContext(ModeContext);
  return mode;
};

export const useDarkMode = () => {
  const { toggleDarkMode } = useContext(ModeContext);
  return toggleDarkMode;
};

ModeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModeProvider;
