import React from 'react';
import classes from './dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogSingle = (props) => {
	// console.log("props.name", props.name);
	// console.log("props.id", props.id);
	let path = "/dialogs/" + props.id;
	return (
		<div className={classes.dialogs_item}>
			{/* <NavLink to="/dialogs/1">Димыч</NavLink> */}
			{/* <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink> */}
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	)
}

// ПОКА - КОММЕНТ
// const dialogsMessage = (props) => {
// 	return (
// 		<div className={classes.dialogsMessage}>{props.dialogsMessage}</div>
// 	)
// }

const Dialogs = (props) => {
	return (
		<div className={classes.dialogs__wrapper}>
			<div className={classes.dialogs__items}>
				{/* <div className={classes.dialogs_item}>
					Димыч
				</div> */}

				<DialogSingle name="Димыч" id="1" />
				<DialogSingle name="Петр" id="2" />
				<DialogSingle name="Иван" id="3" />
				<DialogSingle name="Борис" id="4" />

				{/* <div className={classes.dialogs_item}>
					<NavLink to="/dialogs/1">Димыч</NavLink>
				</div> */}

				{/* <div className={classes.dialogs_item + ' ' + classes.active}>
					<NavLink to="/dialogs/2">Петр</NavLink>
				</div> */}
				{/* <div className={classes.dialogs_item}>
					<NavLink to="/dialogs/3">Иван</NavLink>
				</div> */}
				{/* <div className={classes.dialogs_item}>
					<NavLink to="/dialogs/4">Борис</NavLink>
				</div> */}
			</div>

			<div className={classes.dialogs__messages}>
				<div className={classes.dialogsMessage}>Привет</div>
				<div className={classes.dialogsMessage}>Как дела?</div>
				<div className={classes.dialogsMessage}>Нормально</div>
			</div>
			
		</div>
	)
}

export default Dialogs;