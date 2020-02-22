import React from 'react';
import './header.css';

const Header = () => {
    return (
      <div className="header__wrapper">
        <a href="./home">Home</a>
        <a href="./news">News</a>
        <a href="./money">Money</a>
        <a href="./about">About</a>
        <a href="./contacts">Contacts</a>
      </div>
    )
  }

  export default Header;