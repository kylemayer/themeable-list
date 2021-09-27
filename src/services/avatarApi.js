export const fetchAvatars = async () => {
  const res = await fetch('');
  const characters = await res.json();

  return characters.map((character) => ({
    id: character._id,
    name: character.name,
    image: character.photoUrl,
  }));
};
