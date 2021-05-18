import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ImageContainer from '../components/ImageContainer';
import Menu from '../components/Menu';
import Modal from '../components/Modal';
import AppContext from '../context/AppContext';

const Home = ({ match }) => {
  const { state, addTocart } = useContext(AppContext);
  const [game, setGame] = useState(state.games[0]);
  const [isGameAdded, setGameAdded] = useState(false);

  const hideModal = () => setTimeout(() => {
    setGameAdded(false);
  }, 3000);

  function handleCurrentGame(currentGame) {
    setGame(currentGame);
    hideModal();
  }

  const handleAddTocart = (game) => {
    addTocart(game);
    setGameAdded(true);
    hideModal();
  };

  return (
    <>
      <Header cls="header">
        {/* <Menu /> */}
        <Hero
          isGameOftheYear={game.gameOfTheYear}
          isInDetailsProduct={false}
          gameOfTheYear={game.gameOfTheYear}
          gameName={game.name}
          rank={game.rank}
          price={game.price}
          location={match.path}
        >
          {/* <h2 className="title">Featured</h2> */}
          <div className="container">
            <ImageContainer cls="hero" src={game.previewImage} srcTablet={game.tabletImage} srcDesktop={game.desktopImage} alt={game.name} />
          </div>
        </Hero>
      </Header>
      <div className="games">
      {isGameAdded && <Modal message='Game added'/>}
        <div className="sections">
          {/* <h3>Pre-Order</h3>
          <h3>Specials</h3>
          <h3>Trending</h3> */}
          <h2>Games</h2>
        </div>
        <div className="container">
          {state.games.map((item) => (
            <div
              className="game"
              key={item.id}
              onClick={() => handleCurrentGame(item)}
            >
              <ImageContainer cls="game-cover" src={item.cover} />
              <div className="game-data">
                <h3>{item.name}</h3>
                <span> {item.date} </span>
                <div className="platforms">
                  {item.platforms.map((platform, i) => (
                    <div key={item.id + i} className="platform">
                      {platform}
                    </div>
                  ))}
                </div>
                <button
                  className="button add-cart"
                  onClick={() => handleAddTocart(item)}
                >
                  Buy
                </button>
                <Link to={`/details/${item.id}`}>
                  <button className="button">See more</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
