import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchAvatars } from '../services/avatarApi';

const AvatarContext = createContext();

export const AvatarProvider = ({ children }) => {
  const [avatars, setAvatars] = useState([]);

  useEffect(() => {
    fetchAvatars().then((avatars) => {
      setAvatars(avatars);
    }, []);

    return (
      <AvatarContext.Provider value={{ avatars }}>
        {children}
      </AvatarContext.Provider>
    );
  });
};

export const useAvatars = () => {
  const { avatars } = useContext(AvatarContext);
  return avatars;
};
