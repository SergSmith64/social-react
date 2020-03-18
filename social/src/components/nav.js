import React from 'react';
import classes from './nav.module.css';

const Nav = () => {
    return (
      <div className={classes.nav__wrapper}>
        <a href="#">Profile</a>
        <a href="#">About</a>
        <a href="#">Friends</a>
        <a href="#">Contacts</a>
      </div>
    )
  }

  export default Nav;