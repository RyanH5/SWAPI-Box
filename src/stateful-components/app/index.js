import React, { Component } from 'react';
import './styles.css';
import Buttons from '../../stateless-components/buttons/index';
import PropTypes from 'prop-types';
import ScrollingText from '../scrollingText/index';
import { DataCleaner } from '../../cleaner/cleaner';
import MainContainer from '../../stateless-components/mainContainer/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      vehicles: [],
      planets: [],
      currentCategory: ''
    };
  }

  updateCards = async (category) => {
    const selectedStarWarsData = await DataCleaner(category);
    this.setState({
      [category]: selectedStarWarsData,
      currentCategory: category
    });
  }
   
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://fontmeme.com/permalink/180510/370a53d5d49ac953317d55bb5854b00e.png" />
          <Buttons updateCards={this.updateCards}/>
        </header>
        {(this.state.currentCategory !== '') && <MainContainer 
          categoryData={this.state[this.state.currentCategory]}
        />}
        
        <ScrollingText />
      </div>
    );
  }
}

export default App;
