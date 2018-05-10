// impoort React from 'react';

const getResidents = async (resident) => {
  const unresolvedResidents = planet.residents.map(async (resident, index) => {
    const residentsResponse = await fetch(resident);
    const parsedResidents = await residentsResponse.json();
    return resident.name;
  });
}

export default getResidents;