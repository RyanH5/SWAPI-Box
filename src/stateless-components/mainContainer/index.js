import React from 'react';
import Card from '../../stateful-components/card/index';

const MainContainer = ({categoryData}) => {
  const displayCards = categoryData.map((category, index) => {
    console.log('catdata', category)
    return <Card {...category} key={category + index} />;
  });

    

  return (
    <div>
      {displayCards}
    </div>
  );
};





export  default MainContainer;