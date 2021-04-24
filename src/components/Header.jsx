import React from 'react';
import Hero from './Hero';


const Header = ({ children, cls=null }) => {
  return (
  <header className={cls}>
      { children }
  </header>);
};

export default Header;
