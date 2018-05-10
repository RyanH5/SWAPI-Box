import React from 'react';

const fetchStarWarsData = async (category) => {
  const url = `https://swapi.co/api/${category}`;
  fetch(url);
  const response = await fetch(url);
  const info = await response.json();
	return info;
}; 

const fetchPeopleData = async (info) => {
  const allPeople = info.results;
  const unresolvedPeopleData = allPeople.map(async (person) => {
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

  return Promise.all(unresolvedPeopleData);
};

const fetchVehiclesData = async (info) => {
  const allVehicles = info.results;
  const unresolvedVehicleData = allVehicles.map(async (vehicle) => {
    // const homeworldResponse = await fetch(person.homeworld);
    // const parsedHomeworld = await homeworldResponse.json();
    // const speciesResponse = await fetch(person.species);
    // const parsedSpecies = await speciesResponse.json();

    return {
      name: vehicle.name,
      model: vehicle.model,
      vehicleClass: vehicle.vehicle_class,
      passengers: vehicle.passengers
    };
  });

  return Promise.all(unresolvedVehicleData);
};

// const fetchPlanetsData = async (info) => {
//   const peopleArr = info.results;
//   const unresolvedPeopleData = peopleArr.map(async (person) => {
//     const homeworldResponse = await fetch(person.homeworld);
//     const parsedHomeworld = await homeworldResponse.json();
//     const speciesResponse = await fetch(person.species);
//     const parsedSpecies = await speciesResponse.json();

//     return {
//       name: person.name,
//       homeworld: parsedHomeworld.name,
//       species: parsedSpecies.name,
//       population: parsedHomeworld.population
//     };
//   });

//   return Promise.all(unresolvedPeopleData);
// };

export {
  fetchStarWarsData,
  fetchPeopleData,
  fetchVehiclesData
}
  