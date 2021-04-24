import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ImageContainer from '../components/ImageContainer';
import Menu from '../components/Menu';
import AppContext from '../context/AppContext';

const Home = (props) => {
  console.log(props);
  const { state } = useContext(AppContext);

  const [game, setGame] = useState(state.games[0]);

  function handleCurrentGame(currentGame) {
    console.log(currentGame);
    setGame(currentGame);
  }

  return (
    <>
      <Header cls='header'>
        <Menu />
        <Hero
          isGameOftheYear={game.gameOfTheYear}
          isInDetailsProduct={false}
          gameOfTheYear={game.gameOfTheYear}
          gameName={game.name}
          rank={game.rank}
          price={game.price}
        >
          <h2 className='title'>Featured</h2>
          <div className='container'>
            <ImageContainer cls='hero' src={game.previewImage} alt='' />
          </div>
        </Hero>
      </Header>
      <div className='games'>
        <div className='sections'>
          <h3>Pre-Order</h3>
          <h3>Specials</h3>
          <h3>Trending</h3>
        </div>
        <div className='container'>
          {state.games.map((item) => (
            <div
              className='game'
              key={item.id}
              onClick={() => handleCurrentGame(item)}
            >
              <ImageContainer cls='game-cover' src={item.cover} />
              <div className='game-data'>
                <h3>{item.name}</h3>
                <span> {item.date} </span>
                <div className='platforms'>
                  {item.platforms.map((platform, i) => (
                    <div key={item.id + i} className='platform'>
                      {platform}
                    </div>
                  ))}
                </div>
                <Link to={`/details/${item.id}`}>
                  <button className='button'>See more</button>
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
