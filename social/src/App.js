import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './components/header/header';
import NavBar from './components/navbar/navbar';
import Main from './components/main/main';
import Dialogs from './components/dialogs/dialogs';
import News from './components/news/news';
import Footer from './components/footer/footer';

const App = () => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header className="header"></Header>
				<NavBar className="nav"></NavBar>

				<Route path='/main' component={Main} />
				{/* <Route exact path='/dialogs' component={Dialogs} /> */}
				<Route path='/dialogs' component={Dialogs} />

				{/* <Main className="main"></Main> */}
				{/* <Dialogs /> */}
				<Route path='/news' component={News} />

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