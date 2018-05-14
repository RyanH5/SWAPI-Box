import React from 'react';
import Card from './index';
import { shallow, mount } from 'enzyme';

describe('Card', () => {
  let wrapper;
  let mockAddFavorite = jest.fn();
  let mockCategoryData = {
    homeworld: 'tatooine',
    species: 'human',
    name: 'Obi-Wan', 
    population: '1000',
    model: 'thing',
    vehicleClass: 'thing',
    passengers: 'ad',
    terrain: 'dd',
    climate: 'ddd',
    residents: 'ddd'
  };

  it('should match a snapshot', () => {
    wrapper = shallow(
      <Card
        cardData = {mockCategoryData}
        addFavorite={mockAddFavorite} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
