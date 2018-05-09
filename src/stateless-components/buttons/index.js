import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const Buttons = (props) => {
  return (
    <div>
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
    </div>
  )
}

Buttons.propTypes = {
  updateCards: PropTypes.func.isRequired
}

export default Buttons;