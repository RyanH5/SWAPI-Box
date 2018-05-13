import {shallow, mount} from 'enzyme';
import fetchStarWarsData from './index';

describe('index', () => {
  describe('fetchStarWarsData', () => {
    let mockData;
    let mockURL;

    beforeEach(() => {
      mockURL = 'https://swapi.co/api/vehicles';
      mockData = {
        count: 39,
        next: "https://swapi.co/api/vehicles/?page=2",
        previous: null,
        results: [{
          name: "Sand Crawler",
          model: "Digger Crawler",
          passengers: "30",
          consumables: "2 months",
          vehicle_class: "wheeled"
        }]
      };
    });
    it('should call fetch with the correct parameters', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          status: 200,
          json: () => Promise.resolve(mockData)
        });

        fetchStarWarsData('vehicles');

        expect(window.fetch).toHaveBeenCalledWith(mockURL);
      });
    });

    it('should throw and error if the status is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          status: 500
        });
      });

      const expected = Error('failed');

      expect(fetchStarWarsData('vehicles')).rejects.toEqual(expected);
    });

    it('should throw an error if the response fails', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error('Error occured'));
      });

      const expected = new Error('failed');

      const actual = fetchStarWarsData('vehicles');

      await expect(actual).rejects.toEqual(expected);
    });
  });
});