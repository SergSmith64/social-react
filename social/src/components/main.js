import React from 'react';
import logo from './logo-5ka__2.jpg';
import './main.css';
import Profile from './profile';

const Main = () => {
    return (
      <div>
          <img src="https://cheapthailand.ru/images/Shapka.jpg" alt="Thai"></img>
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