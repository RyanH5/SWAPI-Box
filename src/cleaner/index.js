import React from 'react';

const cleanPeopleData = async (info) => {
  const allPeople = info.results;
  const unresolvedPeopleData = allPeople.map(async (person, index) => {
    const parsedHomeworld = await fetchPersonHomeworldData(person);
    const parsedSpecies = await fetchPersonSpeciesData(person);

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

const fetchPersonHomeworldData = async (person) => {
  try {
    const homeworldResponse = await fetch(person.homeworld);
    if (homeworldResponse.status === 200) {
      const parsedHomeworld = await homeworldResponse.json();
      return parsedHomeworld;
    } else {
      throw new Error( homeworldResponse.status );
    }
  } catch (error) {
    throw error;  
  }
};

const fetchPersonSpeciesData = async (person) => {
  try {
    const speciesResponse = await fetch(person.species);
    if (speciesResponse.status === 200) {
      const parsedSpecies = await speciesResponse.json();
      return parsedSpecies;
    } else {
      throw new Error( speciesResponse.status );
    }
  } catch (error) {
    throw error;  
  }
};


const cleanVehiclesData = async (info) => {
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

const cleanPlanetsData = async (info) => {
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
  return Promise.all(unresolvedResidents);
};

export {
  cleanPeopleData,
  cleanVehiclesData,
  cleanPlanetsData,
  fetchPersonHomeworldData,
  fetchPersonSpeciesData,
  getResidents
};
  