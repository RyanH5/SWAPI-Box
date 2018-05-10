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
      planets: []
    };
  }

  updateCards = async (category) => {
    const cat = await DataCleaner(category);
    console.log('category', category);
    console.log('cat', cat);
    this.setState({
      [category]: cat
    });
  }
   
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SWAPI-Box</h1>
          <Buttons updateCards={this.updateCards}/>
        </header>
        <MainContainer 
          title={this.state.title}
          vehicles={this.state.vehicles}
          planets={this.state.planets}
        />
        <ScrollingText />
      </div>
    );
  }
}

export default App;
