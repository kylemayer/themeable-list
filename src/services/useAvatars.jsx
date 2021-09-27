import { useState, useEffect } from 'react';
import { fetchAvatars } from './avatarApi';

export const useAvatars = () => {
  const [avatars, setAvatars] = useState([]);

  useEffect(() => {
    fetchAvatars()
      .then((avatars) => setAvatars(avatars));
  }, []);

  return { avatars };
};
