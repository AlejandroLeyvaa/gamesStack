import React from 'react';
import axios from 'axios';
import ImageContainer from './ImageContainer';

const Hero = ({
  isGameOftheYear,
  isInDetailsProduct,
  gameOfTheYear,
  gameName,
  image,
  rank,
  price,
}) => {
  return (
    <>
      <h2 className='title'>Featured</h2>
      <div className='container'>
        <ImageContainer cls="hero" src={image} alt="" />
      </div>
      <div className='game-data'>
        <h3>{gameName}</h3>
        {isGameOftheYear ? <h3>{gameOfTheYear}</h3> : <span />}
        {isInDetailsProduct ? (
          <>
            <h3>{developedBy}</h3>
            <span>{rank}</span>
          </>
        ) : (
          <span />
        )}
        <span>{price}</span>
      </div>
    </>
  );
};

export default Hero;
