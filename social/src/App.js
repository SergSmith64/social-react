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
			<div className="foot1">
			The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link,
valid, navigable address as the href value. Need the element to resemble a link, use a button and change it with approprvalid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link,iate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/masevcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-validter/docs/rules/anchor-is-valid.md
			</div>
			<div className="foot2">
			The href attribute requires a valid value to be accessible. Provide a
valid, navigable address as the href value. If you  element to resemble a link, use a button and change it with appropriate styles. The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.
			</div>
		</div>
	);
}

export default App;