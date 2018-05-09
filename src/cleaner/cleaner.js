import React from 'react';

export const DataCleaner = (category) => {
  switch (category) {
    case 'people':
      const fetchPeopleData = (people) => {
        const unresolvedPeopleData = people.map(async (person) => {
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

  }
};