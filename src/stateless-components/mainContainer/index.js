import React from 'react';
import Card from '../../stateful-components/card/index';
import './styles.css';

const MainContainer = ({categoryData, addFavorite, favorites,currentCategory}) => {

  let cards = [];
  let displayCards;
  
  if (currentCategory === 'favorites') {
    cards = favorites;
    displayCards = cards.map((category, index) => {
      return <Card 
        {...category} 
        key={category + index} 
        addFavorite={addFavorite}
        cardData={category} 
      />;
    });
  } else {
    displayCards = categoryData.map((category, index) => {
      return <Card 
        {...category} 
        key={category + index} 
        addFavorite={addFavorite}
        cardData={category} 
      />;
    });
  }

  return (
    <div className="card-container">
      {displayCards}
    </div>
  );
};

// mock data
// do snapshot test

export  default MainContainer;