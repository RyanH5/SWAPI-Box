import React from 'react';
import Card from '../../stateful-components/card/index';
import './styles.css';
import PropTypes from 'prop-types';

const MainContainer = ({
  categoryData, 
  addFavorite, 
  favorites, 
  currentCategory}) => {

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

MainContainer.propTypes = {
  categoryData: PropTypes.array,
  addFavorite: PropTypes.func,
  favorites: PropTypes.array,
  currentCategory: PropTypes.string
};

export  default MainContainer;
