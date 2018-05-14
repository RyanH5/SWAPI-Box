import React, { Component } from 'react';
import './styles.css';
import ScrollingText from '../scrollingText/index';
import { UserSelect } from '../../userSelect/index';
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
      favorites: [],
      currentCategory: '',
      showPopup: false
    };
  }

  displayFavorites = () => {
    this.setState({
      currentCategory : 'favorites'
    });
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

  togglePopup = () => {
    this.setState({
      showPopup: !this.state.showPopup
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
        <ScrollingText 
          currentCategory={this.state.currentCategory}
        />
        <Footer 
          updateCards={this.updateCards}
          displayFavorites={this.displayFavorites}
          togglePopup={this.togglePopup}

        />
      </div>
    );
  }
}

export default App;
