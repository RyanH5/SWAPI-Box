import { fetchStarWarsData, fetchPeopleData, fetchVehiclesData }  from '../api/index';

const DataCleaner = async (category) => {
  const info = await fetchStarWarsData(category);

  if (category === 'people') {
    const resolved = await fetchPeopleData(info);
    return resolved;  
  }
  
  if (category === 'vehicles') {
    const resolved = await fetchVehiclesData(info);
    return resolved;  
  }

  // if (category === 'planets') {
  //   const resolved = await fetchPlanetsData(info);
  //   return resolved;  
  // }
};

// const fetchPeopleData = async (info) => {
//   const allPeople = info.results;
//   const unresolvedPeopleData = allPeople.map(async (person) => {
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

// const fetchVehiclesData = async (info) => {
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

export { DataCleaner };
