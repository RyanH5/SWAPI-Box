import React, { Component } from 'react';
import './styles.css';
import ScrollingText from '../scrollingText/index';
import { DataCleaner } from '../../cleaner/cleaner';
import MainContainer from '../../stateless-components/mainContainer/index';
import Header from '../../stateless-components/header/index';
import Footer from '../../stateless-components/footer/index';

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
        <Header />
        {(this.state.currentCategory !== '') && <MainContainer 
          categoryData={this.state[this.state.currentCategory]}
        />}  
        <ScrollingText />
        <Footer updateCards={this.updateCards}/>
      </div>
    );
  }
}

export default App;
