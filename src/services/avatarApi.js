/* eslint-disable max-len */
export const fetchAvatars = async (page) => {
  const res = await fetch(
    `https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=10&page=${page}`
  );
  const json = await res.json();

  return json.map(({ name, photoUrl }) => ({
    name,
    image: photoUrl,
  }));
};
