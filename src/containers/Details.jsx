import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import DetailsComponent from '../components/DetailsComponent';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AppContext from '../context/AppContext';

const Details = ({ match }) => {
  const history = useHistory();
  const { id } = match.params;
  const {
    state: { games },
  } = useContext(AppContext);
  const currentGame = games.filter((item) => item.id == id);

  const handleClick = () => {
    history.goBack();
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
      <DetailsComponent game={currentGame[0]} />
    </>
  );
};

export default Details;
