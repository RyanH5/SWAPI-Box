import { shallow, mount } from 'enzyme';
import { fetchVehiclesData } from './index';

describe('index', () => {
  
  describe('fetchPeopleData', () => {
    it.skip('calls fetch with the correct data', () => {
  
    });
  });
  
  describe('fetchVehicleData', () => {
    it('should call fetch with the correct params', () => {
      const mockURL = 'https://swapi.co/api/vehicles';
      const mockData = {
        count: 39,
        next: "https://swapi.co/api/vehicles/?page=2",
        previous: null,
        results: [
          {
            name: "Sand Crawler",
            model: "Digger Crawler",
            manufacturer: "Corellia Mining Corporation",
            cost_in_credits: "150000",
            length: "36.8",
            max_atmosphering_speed: "30",
            crew: "46",
            passengers: "30",
            cargo_capacity: "50000",
            consumables: "2 months",
            vehicle_class: "wheeled",
            pilots: [],
            films: [
              "https://swapi.co/api/films/5/",
              "https://swapi.co/api/films/1/"
            ],
            created: "2014-12-10T15:36:25.724000Z",
            edited: "2014-12-22T18:21:15.523587Z",
            url: "https://swapi.co/api/vehicles/4/"
          }]
      };
  
      window.fetch = jest.fn().mockImplementation( () => {
        Promise.resolve({
          status: 200,
          json: () => Promise.resolve( mockData )
        })
  
        fetchVehiclesData(info);
        
        expect( window.fetch ).toHaveBeenCalledWith(mockData)
      })
    });
  });
})
