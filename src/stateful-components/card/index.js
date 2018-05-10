import React from 'react';
import './styles.css';

const Card = (props) => {
  return (
    <div className="card">
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

export default Card;
