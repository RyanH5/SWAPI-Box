export const fetchStarWarsData = async (category) => {
  try {
    const url = `https://swapi.co/api/${category}`;
    fetch(url);
    const response = await fetch(url);
    if (response.status === 200) {
      const info = await response.json();
      return info;
    } else {
      throw new Error( response.status );
    }
  } catch ( error ) {
    throw error;
  }
};
