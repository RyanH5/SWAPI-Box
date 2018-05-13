import React, { Component } from 'react';
import './styles.css';
import ScrollingText from '../scrollingText/index';
import { UserSelect } from '../../userSelect/index';
import MainContainer from '../../stateless-components/mainContainer/index';
import Header from '../../stateless-components/header/index';
import Footer from '../../stateless-components/footer/index';
import Card from '../../stateful-components/card/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      vehicles: [],
      planets: [],
      favorites: [],
      currentCategory: ''
    };
  }

  displayFavorites = (category) => {
    this.setState({
      currentCategory : 'favorites'
    })
  }

  updateCards = async (category) => {
    const selectedStarWarsData = await UserSelect(category);
    this.setState({
      [category]: selectedStarWarsData,
      currentCategory: category
    });
  }

  addFavorite = (cardData) => {
    this.setState({
      favorites: [...this.state.favorites, cardData]
    });
  }
   
  render() {
    return (
      <div className="App">
        <Header />
        {
          (this.state.currentCategory !== '') && 
          <MainContainer 
            categoryData={this.state[this.state.currentCategory]}
            addFavorite={this.addFavorite}
            favorites={this.state.favorites}
            currentCategory={this.state.currentCategory}
          />
        }  
        <ScrollingText />
        <Footer 
          updateCards={this.updateCards}
          displayFavorites={this.displayFavorites}
        />
      </div>
    );
  }
}

export default App;
