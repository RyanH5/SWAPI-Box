import { fetchPeopleData, fetchVehiclesData, fetchPlanetsData }  from '../api/index';
import { fetchStarWarsData } from '../cleaner/index';

const UserSelect = async (category) => {
  const info = await fetchStarWarsData(category);

  if (category === 'people') {
    const resolved = await fetchPeopleData(info);
    return resolved;  
  }
  
  if (category === 'vehicles') {
    const resolved = await fetchVehiclesData(info);
    return resolved;  
  }

  if (category === 'planets') {
    const resolved = await fetchPlanetsData(info);
    return resolved;  
  }
};

export { UserSelect };
