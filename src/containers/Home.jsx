import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ImageContainer from '../components/ImageContainer';
import Menu from '../components/Menu';
import AppContext from '../context/AppContext';

const Home = () => {
  const { state, addTocart } = useContext(AppContext);

  const [game, setGame] = useState(state.games[0]);
  const [isGameAdded, setGameAdded] = useState(false);

  useEffect(() => {
    console.log('Hide')

    const hideModal = setTimeout(() => {
      setGameAdded(false);
    }, 3000);

    return () => clearTimeout(hideModal);
  }, []);

  function handleCurrentGame(currentGame) {
    setGame(currentGame);
  }

  const handleAddTocart = (game) => {
    addTocart(game);
    setGameAdded(true);
  };

  return (
    <>
      <Header cls="header">
        <Menu />
        <Hero
          isGameOftheYear={game.gameOfTheYear}
          isInDetailsProduct={false}
          cart={ state.cart }
          gameOfTheYear={game.gameOfTheYear}
          gameName={game.name}
          rank={game.rank}
          price={game.price}
        >
          <h2 className="title">Featured</h2>
          <div className="container">
            <ImageContainer cls="hero" src={game.previewImage} alt="" />
          </div>
        </Hero>
      </Header>
      <div className="games">
      {isGameAdded ? (
          <div className="game-added-modal">
            <h3>Game added</h3>
          </div>
        ) : null}
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
