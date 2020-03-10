import React from 'react';
import logo from './logo-5ka__2.jpg';
import './main.css';
import Profile from './profile';

const Main = () => {
    return (
      <div>
        <div className="main__img_wrapper">
          <img src="https://cheapthailand.ru/images/antalia_sea.jpg" alt="Travel"></img>
        </div>
        <ul>
          <li>11</li>
          <li>22</li>
          <li>33</li>
        </ul>
        <Profile className="profile"></Profile>
      </div>
    )
  }

  export default Main;