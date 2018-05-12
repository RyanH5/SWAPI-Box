import React from 'react';
import PropTypes from 'prop-types';
import Buttons from '../buttons/index';

const Footer = ({ updateCards, displayFavorites }) => {
  return (
    <div>
      <Buttons 
        updateCards={updateCards}
        displayFavorites={displayFavorites}
      />
      <img className="dashboard-pic" src="http://blog.ocad.ca/wordpress/digf6l01-fw201402-01/files/2014/10/tumblr_larntzqOpV1qz5zvo.png" />
    </div>
  );
};

Footer.PropTypes = {
  updateCards: PropTypes.func.isRequired
};

export default Footer;
