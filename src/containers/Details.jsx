import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AppContext from '../context/AppContext';

const Details = ({ match }) => {
  const { state, addTocart, addTotal } = useContext(AppContext);
  const [isGameAdded, setGameAdded] = useState(false);
  const history = useHistory();
  const { id } = match.params;
  const {
    state: { games },
  } = useContext(AppContext);
  const currentGame = games.filter((item) => item.id == id);

  const handleClick = () => {
    history.goBack();
  };

  const hideModal = () => {
    setTimeout(() => {
      setGameAdded(false);
    }, 3000);
  };

  const handleAddTocart = () => {
    addTocart(currentGame[0]);
    setGameAdded(true);
    hideModal();
  };

  const goTo = () => {
    addTotal();
    history.push('/payment');
  };

  return (
    <>
      <Header cls="header-details">
        <video className="video" muted autoPlay>
          <source src={currentGame[0].gameplay} />
        </video>
        <div className="return">
          <div className="arrow" onClick={handleClick} />
        </div>
        <Hero
          isGameOftheYear={currentGame[0].gameOfTheYear}
          isInDetailsProduct={true}
          gameName={currentGame[0].name}
          rank={currentGame[0].rank}
          price={currentGame[0].price}
          developedBy={currentGame[0].developed}
        />
      </Header>
      <div className="details">
        <h3 className="about">About</h3>
        <p className="about-content">{currentGame[0].about}</p>
        <h3 className="specifications">Specifications</h3>
        <h4>Minimum</h4>
        {currentGame[0].specifications.minimum.map((item) => (
          <p key={Math.random()} className="specifications-content">
            {item}
          </p>
        ))}

        {currentGame[0].specifications.recommended.length > 0 && (
          <h4>Recommended</h4>
        )}
        {currentGame[0].specifications.recommended.map((item) => (
          <p key={Math.random()} className="specifications-content">
            {item}
          </p>
        ))}
      </div>
      <div className="box" />

      {isGameAdded ? (
        <div className="game-added-modal">
          <h3>Game added</h3>
        </div>
      ) : null}

      <div className="buttons">
        <button className="button like"></button>
        {state.cart.length === 0 ? (
          <button className="button add-cart" onClick={handleAddTocart}>
            Add To Cart
          </button>
        ) : (
          <button className="button add-cart" onClick={goTo}>Go To Pay</button>
        )}
      </div>
    </>
  );
};

export default Details;
