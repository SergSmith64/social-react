import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Nav from './components/nav';
import Main from './components/main';
import Profile from './components/profile';
import Footer from './components/footer';

const App = () => {
	return (
		<div className="app-wrapper">
			<Header className="header"></Header>
			<Nav className="nav"></Nav>
			<Main className="main"></Main>
			<Profile className="profile"></Profile>

			<div className="advert1">
			The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link,
valid, navigable address as the href value. Need the element to resemble a link, use a button and change it with approprvalid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link,iate styles.
			</div>
			<div className="advert2">
			The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you  element to resemble a link, use a button and change it with appropriate styles. The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.
			</div>
			<div className="advert3">
				If you  element to resemble a link, use a button and change it with appropriate styles.
			</div>

			<Footer className="footer"></Footer>
		</div>
	);
}

export default App;