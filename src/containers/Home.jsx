import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ImageContainer from '../components/ImageContainer';
import AppContext from '../context/AppContext';

const Home = () => {
  const { state } = useContext(AppContext);

  const [game, setGame] = useState(state.games[0]);

  function handleCurrentGame(currentGame) {
    console.log(currentGame);
    setGame(currentGame);
  }

  return (
    <>
      <Header>
        <Hero
          isGameOftheYear={game.gameOfTheYear}
          isInDetailsProduct={false}
          gameOfTheYear={game.gameOfTheYear}
          gameName={game.name}
          image={game.previewImage}
          rank={game.rank}
          price={game.price}
        />
      </Header>
      <div className="games">
        <div className="sections">
          <h3>Pre-Order</h3>
          <h3>Specials</h3>
          <h3>Trending</h3>
        </div>
        <div className='container'>
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
                {item.platforms.map((platform, i) => (
                  <div key={item.id + i}>
                    <div className="platform">{platform}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
