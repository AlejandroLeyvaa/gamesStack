import React from 'react';
import Hero from './Hero';


const Header = ({ children }) => {
  return (
  <header className='header'>
    <menu className='menu'>
      <div className='menu-button'>
        <div className='rec' />
        <div className='rec' />
      </div>
      <div className="search-icon">
        <div className='circle' />
        <div className='rec' />
      </div>
    </menu>
      { children }
  </header>);
};

export default Header;
