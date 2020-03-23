import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import Nav from './components/navbar/nav';
import Dialogs from './components/dialogs/dialogs';
import Main from './components/main/main';
import Footer from './components/footer/footer';

const App = () => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header className="header"></Header>
				<Nav className="nav"></Nav>
				<Route path='/main' component={Main} />
				<Route path='/dialogs' component={Dialogs} />
				{/* <Main className="main"></Main> */}
				{/* <Dialogs /> */}

				<div className="advert1">
					<p>Здесь могла бы быть ваша реклама</p>
					<p>Здесь могла бы быть ваша реклама</p>
					<p>Здесь могла бы быть ваша реклама</p>
				</div>
				<div className="advert2">
					<p>НИЗ ПОСЕРЕДИНЕ С ОТБИВКОЙ ВПРАВО:</p>
					<p>The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value.</p>
				</div>
				<div className="advert3">
					<p>ЭТО ПРАВЫЙ НИЖНИЙ УГОЛ</p>
					<p>ЭТО ПРАВЫЙ НИЖНИЙ УГОЛ</p>
					<p>ЭТО ПРАВЫЙ НИЖНИЙ УГОЛ</p>
				</div>

				<Footer className="footer"></Footer>
			</div>
		</BrowserRouter>
	);
}

export default App;