// import React from 'react';
import StarWarsData  from '../api/index';
// run starwarsdata w/ category wait to resolve
// pass array of people into fetchpeopledatea
const DataCleaner = async (category) => {
  const info = await StarWarsData(category);
  // debugger;
  if (category === 'people') {
    
    console.log('infooo', info)
  
    const resolved = await fetchPeopleData(info);
    console.log(resolved)
    return resolved;
    
  }
};

const fetchPeopleData = async (info) => {
  const peopleArr = info.results;
  const unresolvedPeopleData = peopleArr.map(async (person) => {
    const homeworldResponse = await fetch(person.homeworld);
    const parsedHomeworld = await homeworldResponse.json();
    const speciesResponse = await fetch(person.species);
    const parsedSpecies = await speciesResponse.json();

    return {
      name: person.name,
      homeworld: parsedHomeworld.name,
      species: parsedSpecies.name,
      population: parsedHomeworld.population
    };
  });
  console.log('hhhhhhhhh', unresolvedPeopleData)
  return Promise.all(unresolvedPeopleData);
};

export { DataCleaner };
