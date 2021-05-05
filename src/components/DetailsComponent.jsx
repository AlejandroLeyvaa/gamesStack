import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Modal from './Modal';

const DetailsComponent = ({game}) => {
  const { state, addTocart, addTotal } = useContext(AppContext);
  const [isGameAdded, setGameAdded] = useState(false);
  const history = useHistory();

  const hideModal = () => {
    setTimeout(() => {
      setGameAdded(false);
    }, 3000);
  };

  const handleAddTocart = () => {
    addTocart(game);
    setGameAdded(true);
    hideModal();
  };

  const goTo = () => {
    addTotal();
    history.push('/payment');
  };

  return (
    <>
      <div className="details">
        <h3 className="about">About</h3>
        <p className="about-content">{game.about}</p>
        <h3 className="specifications">Specifications</h3>
        <h4>Minimum</h4>
        {game.specifications.minimum.map((item) => (
          <p key={Math.random()} className="specifications-content">
            {item}
          </p>
        ))}

        {game.specifications.recommended.length > 0 && (
          <h4>Recommended</h4>
        )}
        {game.specifications.recommended.map((item) => (
          <p key={Math.random()} className="specifications-content">
            {item}
          </p>
        ))}
      </div>
      <div className="box" />

      {isGameAdded && <Modal message="Game added" />}

      <div className="buttons">
        <button className="button like"></button>
        {state.cart.length === 0 ? (
          <button className="button add-cart" onClick={handleAddTocart}>
            Add To Cart
          </button>
        ) : (
          <button className="button add-cart" onClick={goTo}>
            Go To Pay
          </button>
        )}
      </div>
    </>
  );
};

export default DetailsComponent;
