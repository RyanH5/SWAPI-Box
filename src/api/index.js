import React from 'react';

const StarWarsData = async (category) => {
  const url = `https://swapi.co/api/${category}`;
  fetch(url);
  const response = await fetch(url);
  const info = await response.json();
	return info;
}; 

export default StarWarsData;