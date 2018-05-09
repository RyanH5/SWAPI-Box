import React, { Component } from 'react';
import './styles.css';
import Buttons from '../../stateless-components/buttons/index';
import PropTypes from 'prop-types';
import ScrollingText from '../scrollingText/index';
import { DataCleaner } from '../../cleaner/cleaner';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      vehicles: [],
      planets: []
    };
  }

  updateCards = (category) => {
    this.setState({
      [category]: DataCleaner(category)
    });
  }
   
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SWAPI-Box</h1>
          <Buttons updateCards={this.updateCards}/>
        </header>
        <main>
          <ScrollingText />
        </main>
      </div>
    );
  }
}

export default App;
