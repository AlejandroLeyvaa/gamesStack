import React from 'react';
import Hero from './Hero';


const Header = ({ children }) => {
  return (
  <header className='header'>
    <menu className='menu'>
      <div className='menu-button'>

      </div>
      <div className="search-icon">

      </div>
    </menu>
      { children }
  </header>);
};

export default Header;
