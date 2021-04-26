import React, { useState, useEffect } from 'react';

const Hero = ({
  children,
  isGameOftheYear,
  isInDetailsProduct,
  gameOfTheYear,
  gameName,
  rank,
  price,
  developedBy,
}) => {
  const [rankElements, setRankElements] = useState([]);
  useEffect(() => {
    const arrSpan = [];
    for (let i = 0; i < rank; i++) {
      arrSpan.push(i);
    }
    setRankElements(arrSpan);
  }, []);

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
            <div className='rank'>
              {rankElements.map(() => (
                <span key={Math.random()} className="star" />
              ))}
            </div>
          </>
        ) : null}
        <span className="game-price">${price}.00</span>
      </div>
    </>
  );
};

export default Hero;
