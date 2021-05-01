import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router';
import AppContext from '../context/AppContext';

const Hero = ({
  children,
  isGameOftheYear,
  isInDetailsProduct,
  gameOfTheYear,
  gameName,
  rank,
  price,
  developedBy,
  cart,
}) => {
  const { addTotal } = useContext(AppContext);
  const [rankElements, setRankElements] = useState([]);
  const history = useHistory();
  useEffect(() => {
    const arrSpan = [];
    for (let i = 0; i < rank; i++) {
      arrSpan.push(i);
    }
    setRankElements(arrSpan);
  }, []);

  const handleClick = () => {
    addTotal();
    history.push('/payment');
  };

  return (
    <>
      {children}
      <div className="game-data">
        <h3 className="game-name">{gameName}</h3>
        {isGameOftheYear ? (
          <h3 className="game-year">{gameOfTheYear}</h3>
        ) : null}
        {isInDetailsProduct ? (
          <>
            <h3 className="developers">{developedBy}</h3>
            <div className="rank">
              {rankElements.map(() => (
                <span key={Math.random()} className="star" />
              ))}
            </div>
          </>
        ) : null}
        <span className="game-price">${price}.00</span>
        {cart.length > 0 && (<button className='button buy' onClick={handleClick}>Go To Pay</button> )}
      </div>
    </>
  );
};

export default Hero;
