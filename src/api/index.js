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
  const unresolvedPeopleData = allPeople.map(async (person, index) => {
    const homeworldResponse = await fetch(person.homeworld);
    const parsedHomeworld = await homeworldResponse.json();
    const speciesResponse = await fetch(person.species);
    const parsedSpecies = await speciesResponse.json();

    return {
      name: person.name,
      homeworld: parsedHomeworld.name,
      species: parsedSpecies.name,
      population: parsedHomeworld.population,
      id: `person${index}`
    };
  });

  return Promise.all(unresolvedPeopleData);
};

const fetchVehiclesData = async (info) => {
  const allVehicles = info.results;
  const unresolvedVehicleData = allVehicles.map(async (vehicle) => {

    return {
      name: vehicle.name,
      model: vehicle.model,
      vehicleClass: vehicle.vehicle_class,
      passengers: vehicle.passengers
    };
  });

  return Promise.all(unresolvedVehicleData);
};

const fetchPlanetsData = async (info) => {
  const allPlanets = info.results;
  const unresolvedPlanetData = allPlanets.map(async (planet, index) => {
    const residentData = await getResidents(planet);
      
    return {
      name: planet.name,
      terrain: planet.terrain,
      population: planet.population,
      climate: planet.climate,
      residents: residentData,
      id: `resident${index}`
    };
  });

  return Promise.all(unresolvedPlanetData);
};

const getResidents = async (planet) => {
  const unresolvedResidents = planet.residents.map(async (resident) => {
    const residentsResponse = await fetch(resident);
    const parsedResidents = await residentsResponse.json();
    return parsedResidents.name;
  });
  return Promise.all(unresolvedResidents)
};

export {
  fetchStarWarsData,
  fetchPeopleData,
  fetchVehiclesData,
  fetchPlanetsData
};
  