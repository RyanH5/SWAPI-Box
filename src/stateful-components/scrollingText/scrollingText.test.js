import React from 'react';
import ReactDOM from 'react-dom';
import ScrollingText from './index';
import {shallow} from 'enzyme';

describe('ScrollingText', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ScrollingText />, 
      { disableLifecycleMethods: true }); 
  });

  // it('should match a snapshot', () => {
  //   expect(wrapper).toMatchSnapshot();
  // });
});