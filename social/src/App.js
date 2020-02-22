import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Nav from './components/nav';
import Main from './components/main';
import Footer from './components/footer';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header className="header"></Header>
      <Nav className="nav"></Nav>
      <Main className="main"></Main>
      <Footer className="footer"></Footer>
    </div>
  );
}

export default App;