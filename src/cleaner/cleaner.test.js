import {shallow, mount} from 'enzyme';
import { fetchPersonHomeworldData, fetchPersonSpeciesData, getResidents } from './index';

describe('api', () => {
  describe('fetchPersonHomeworldData', () => {
    let mockUrl;
    let mockData;
    beforeEach(() => {
      mockUrl = "https://swapi.co/api/planets/1/";
      mockData = {
        name: "Tatooine",
        rotation_period: "23",
        orbital_period: "304",
        diameter: "10465",
        climate: "arid",
        gravity: "1 standard",
        terrain: "desert",
        surface_water: "1",
        population: "200000",
        residents: [
          "https://swapi.co/api/people/1/",
          "https://swapi.co/api/people/2/",
          "https://swapi.co/api/people/4/",
          "https://swapi.co/api/people/6/",
          "https://swapi.co/api/people/7/",
          "https://swapi.co/api/people/8/",
          "https://swapi.co/api/people/9/",
          "https://swapi.co/api/people/11/",
          "https://swapi.co/api/people/43/",
          "https://swapi.co/api/people/62/"
        ],
        films: [
          "https://swapi.co/api/films/5/",
          "https://swapi.co/api/films/4/",
          "https://swapi.co/api/films/6/",
          "https://swapi.co/api/films/3/",
          "https://swapi.co/api/films/1/"
        ],
        created: "2014-12-09T13:50:49.641000Z",
        edited: "2014-12-21T20:48:04.175778Z",
        url: "https://swapi.co/api/planets/1/"
      };
    });
    it('should call fetch with the correct parameters', () => {   
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          status: 200,
          json: () => Promise.resolve( mockData )
        });

        fetchPersonHomeworldData(mockUrl);

        expect(window.fetch).toHaveBeenCalledWith(mockUrl);
      });
    });

    it('should throw and error if the status is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          status: 500
        });
      });
      const result = fetchPersonHomeworldData(mockUrl);
      const expected = Error('500');

      expect(result).rejects.toEqual(expected);
    });

    it('should throw an error if the response fails', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error('Error occured'));
      });

      const expected = new Error('Error occured');
      const actual = fetchPersonHomeworldData( mockUrl );

      await expect(actual).rejects.toEqual(expected);
    });
  });

  describe('fetchPersonSpeciesData', () => {
    let mockUrl;
    let mockData;
    beforeEach(() => {
      mockUrl = "https://swapi.co/api/species/2/";
      mockData = {
        name: "Droid",
        classification: "artificial",
        designation: "sentient",
        average_height: "n/a",
        skin_colors: "n/a",
        hair_colors: "n/a",
        eye_colors: "n/a",
        average_lifespan: "indefinite",
        homeworld: null,
        language: "n/a",
        people: [
          "https://swapi.co/api/people/2/",
          "https://swapi.co/api/people/3/",
          "https://swapi.co/api/people/8/",
          "https://swapi.co/api/people/23/",
          "https://swapi.co/api/people/87/"
        ],
        films: [
          "https://swapi.co/api/films/2/",
          "https://swapi.co/api/films/7/",
          "https://swapi.co/api/films/5/",
          "https://swapi.co/api/films/4/",
          "https://swapi.co/api/films/6/",
          "https://swapi.co/api/films/3/",
          "https://swapi.co/api/films/1/"
        ],
        created: "2014-12-10T15:16:16.259000Z",
        edited: "2015-04-17T06:59:43.869528Z",
        url: "https://swapi.co/api/species/2/"
      };
    });
    it('should call fetch with the correct parameters', () => {   
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          status: 200,
          json: () => Promise.resolve( mockData )
        });

        fetchPersonSpeciesData(mockUrl);

        expect(window.fetch).toHaveBeenCalledWith(mockUrl);
      });
    });

    it('should throw and error if the status is not ok', () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          status: 500
        });
      });
      const result = fetchPersonSpeciesData(mockUrl);
      const expected = Error('500');

      expect(result).rejects.toEqual(expected);
    });

    it('should throw an error if the response fails', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error('Error occured'));
      });

      const expected = new Error('Error occured');
      const actual = fetchPersonSpeciesData( mockUrl );

      await expect(actual).rejects.toEqual(expected);
    });
  });

  describe('getResidents', () => {
    let mockUrl;
    let mockData;
    beforeEach(() => {
      mockUrl = "https://swapi.co/api/people/5/";
      mockData = {
        "name": "Leia Organa",
        "height": "150",
        "mass": "49",
        "hair_color": "brown",
        "skin_color": "light",
        "eye_color": "brown",
        "birth_year": "19BBY",
        "gender": "female",
        "homeworld": "https://swapi.co/api/planets/2/",
        "films": [
          "https://swapi.co/api/films/2/",
          "https://swapi.co/api/films/6/",
          "https://swapi.co/api/films/3/",
          "https://swapi.co/api/films/1/",
          "https://swapi.co/api/films/7/"
        ],
        "species": [
          "https://swapi.co/api/species/1/"
        ],
        "vehicles": [
          "https://swapi.co/api/vehicles/30/"
        ],
        "starships": [],
        "created": "2014-12-10T15:20:09.791000Z",
        "edited": "2014-12-20T21:17:50.315000Z",
        "url": "https://swapi.co/api/people/5/"
      };
    });
    it('should call fetch with the correct parameters', () => {   
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          status: 200,
          json: () => Promise.resolve( mockData )
        });

        getResidents(mockUrl);

        expect(window.fetch).toHaveBeenCalledWith(mockUrl);
      });
    });

    it('should throw and error if the status is not ok', 
      async () => {
        const mockParsedReseidents = {
          name: "Lobot"
        };
        window.fetch = jest.fn().mockImplementation(() => {
          return Promise.reject(new Error('mock error')
          );
        });
        const mockPlanet = {
          residents:
        ["https://swapi.co/api/people/5/", "https://swapi.co/api/people/68/", "https://swapi.co/api/people/81/"]
        };
        const result = getResidents(mockPlanet);
        const expected = new Error('mock error');

        await expect(result).rejects.toEqual(expected);
      });

    it('should throw an error if the response fails', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.reject(Error('Error occured'));
      });

      const expected = new Error('Error occured');
      const actual = getResidents( mockUrl );

      await expect(actual).rejects.toEqual(expected);
    });
  });
});