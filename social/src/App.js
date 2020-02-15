import React from 'react';
// import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Tech />
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <a href="#">Home</a>
      <a href="#">News</a>
      <a href="#">About</a>
    </div>
  )
}

const Tech = () => {
  return (
    <ul>
      <li>11</li>
      <li>22</li>
      <li>33</li>
      <li>44</li>
    </ul>
  )
}

export default App;
