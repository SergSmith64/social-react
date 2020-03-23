import React from 'react';
import classes from './nav.module.css';

const Nav = () => {
		return (
			<div className={classes.nav__wrapper}>
				{/* <a href="#">Профиль</a> */}
				<a href="/Main">Профиль</a>

				{/* <a href="#">Сообщения</a> */}
				<a href="/Dialogs">Сообщения</a>
				
				{/* <a href="#">Новости</a> */}
				<a href="/News">Сообщения</a>

				<a href="#">Музыка</a>
				<a href="#">НАСТРОЙКИ</a>
			</div>
		)
	}

	export default Nav;