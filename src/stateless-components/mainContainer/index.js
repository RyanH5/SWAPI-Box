import React from 'react';
import Card from '../../stateful-components/card/index';
import './styles.css';

const MainContainer = ({categoryData}) => {
  const displayCards = categoryData.map((category, index) => {
    return <Card {...category} key={category + index} />;
  });

  return (
    <div className="card-container">
      {displayCards}
    </div>
  );
};

export  default MainContainer;