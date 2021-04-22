import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ImageContainer from '../components/ImageContainer';
import AppContext from '../context/AppContext';

const Home = () => {
  const { state } = useContext(AppContext);

  const [game, setGame] = useState(state.games[0]);

  console.log(game)

  function handleCurrentGame( currentGame ) {
    console.log(currentGame);
    setGame(currentGame);
  }

  return (
    <>
      <Header>
        <Hero
            isGameOftheYear = {game.gameOfTheYear}
            isInDetailsProduct = { false }
            gameOfTheYear = {game.gameOfTheYear}
            gameName = {game.name}
            image = {game.cover}
            rank = {game.rank}
            price = {game.price}
          />
      </Header>

      {state.games.map((item) => (
        <div
          className="game"
          key={item.id}
          onClick={() => handleCurrentGame(item)}
        >
          <ImageContainer src={item.cover} />
        </div>
      ))}
    </>
  );
};

export default Home;
