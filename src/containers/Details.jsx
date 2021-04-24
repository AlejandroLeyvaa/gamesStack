import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AppContext from '../context/AppContext';

const Details = ({ match }) => {
  const { id } = match.params;
  const {
    state: { games },
  } = useContext(AppContext);
  const currentGame = games.filter((item) => item.id == id);

  return (
    <>
      <Header cls='header-details'>
        <video className='video' muted autoPlay>
          <source src={currentGame[0].gameplay} />
        </video>
        <Hero
          isGameOftheYear={currentGame[0].gameOfTheYear}
          isInDetailsProduct={true}
          gameOfTheYear={currentGame[0].gameOfTheYear}
          gameName={currentGame[0].name}
          rank={currentGame[0].rank}
          price={currentGame[0].price}
          developedBy={currentGame[0].developed}
        />
      </Header>
      <div className='details'>
        <h3 className='about'>About</h3>
        <p className='about-content'>{ currentGame[0].about }</p>
        <h3 className='specifications'>Specifications</h3>
        <h4>Minimum</h4>
        {currentGame[0].specifications.minimum.map((item) => (
          <p key={ Math.random() } className='specifications-content'>{ item }</p>
        ))}
        <h4>Recommended</h4>
        {currentGame[0].specifications.recommended.map((item) => (
          <p key={ Math.random() } className='specifications-content'>{ item }</p>
        ))}
      </div>
    </>
  );
};

export default Details;
