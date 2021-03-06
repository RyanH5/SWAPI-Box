import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const Navigation = (props) => {
  return (
    <div className="button-container">
      <button 
        onClick={() => props.updateCards('people')}>
        People
      </button>
      <button
        onClick={() => props.updateCards('vehicles')}>
        Vehicles
      </button>
      <button
        onClick={() => props.updateCards('planets')}>
        Planets
      </button>
      <button
        onClick={() => props.displayFavorites('favorites')}>
        View All
        <span>{props.favorites.length}</span>
        Favorites
      </button>
    </div>
  );
};

Navigation.propTypes = {
  updateCards: PropTypes.func.isRequired,
  addFavorite: PropTypes.func,
  displayFavorites: PropTypes.func,
  favorites: PropTypes.array
};

export default Navigation;