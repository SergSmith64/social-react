import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './navbar.module.css';

const NavBar = () => {
		return (
			<div className={classes.nav__wrapper}>
				{/* <a href="#">Профиль</a> */}
				{/* <a href="/Main">Профиль</a> */}
				{/* <NavLink to="/Main">Профиль</NavLink> */}
				<div>
					<NavLink to="/Main" activeClassName={classes.activeLink}>Профиль</NavLink>
				</div>

				{/* <a href="#">Сообщения</a> */}
				{/* <a href="/Dialogs">Сообщения</a> */}
				<div>
					<NavLink to="/Dialogs" activeClassName={classes.activeLink}>Сообщения</NavLink>
				</div>
				
				{/* <a href="#">Новости</a> */}
				{/* <a href="/News">Новости</a> */}
				<div>
					<NavLink to="/News" activeClassName={classes.activeLink}>Новости</NavLink>
				</div>

				<div>
					<a href="#">Музыка</a>
				</div>

				<div>
					<a href="#">НАСТРОЙКИ</a>
				</div>
			</div>
		)
	}

	export default NavBar;