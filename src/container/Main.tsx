import React from 'react';
import MainContainer from './MainContainer';
import Button from '../styles/Button';
import Card from '../styles/Card';
import { PRODUCTS } from '../data/products';


const Main = () => {

  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <MainContainer>
      {PRODUCTS.map((item) => (
          <Card key={item.id} item={item} onButtonClick={handleClick} />
      ))}
    </MainContainer>
  );
};

export default Main;