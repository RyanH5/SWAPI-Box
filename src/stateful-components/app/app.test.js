import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';
import {shallow} from 'enzyme';

describe('App', () => {
  let wrapper;
  // let people;
  const mockUpdateCards = jest.fn();

  const mockUpdatedCard = {
    category: "people",
    homeworld: "Tatooine",
    name: "Luke Skywalker",
    population: "200000",
    species: "Human"
  };

  beforeEach(() => {
    wrapper = shallow(<App />, 
      { disableLifecycleMethods: true }); 
  });

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // it('should be able add cards to its state', () => {
  //   expect(wrapper.state('people')).toEqual([]);
  //   wrapper.instance().mockUpdateCards(mockUpdatedCard);
  //   expect(wrapper.state('people')).toEqual([mockUpdatedCard]);
  // });
});
