import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const Card = (props) => {
  return (
    <div className="card">
      <div 
        onClick={() => {
          props.addFavorite(props.cardData);
        }}
        className="favorites-block">
      </div>
      <h2>{props.name}</h2>
      <h4>{props.homeworld}</h4>
      <h4>{props.species}</h4>
      <h4>{props.population}</h4>
      <h4>{props.model}</h4>
      <h4>{props.vehicleClass}</h4>
      <h4>{props.passengers}</h4>
      <h4>{props.terrain}</h4>
      <h4>{props.climate}</h4>
      <h4>{props.residents}</h4>
    </div>
  );
};

Card.propTypes = {
  addFavorite: PropTypes.func,
  name: PropTypes.string,
  homeworld: PropTypes.string,
  species: PropTypes.string,
  population: PropTypes.string,
  model: PropTypes.string,
  vehicleClass: PropTypes.string,
  passengers: PropTypes.string,
  terrain: PropTypes.string,
  climate: PropTypes.string,
  residents: PropTypes.array,
  cardData: PropTypes.object
};

export default Card;
