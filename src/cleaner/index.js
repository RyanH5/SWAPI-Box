export const fetchStarWarsData = async (category) => {
  const url = `https://swapi.co/api/${category}`;
  fetch(url);
  const response = await fetch(url);
  const info = await response.json();
  return info;
}; 
