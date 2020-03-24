import React from 'react';
import classes from './dialogs.module.css';



const Dialogs = (props) => {
	return (
		<div className={classes.dialogs__wrapper}>
			<div className={classes.dialogs__items}>
				<div className={classes.dialogs_item}>Димыч</div>
				<div className={classes.dialogs_item}>Петр</div>
				<div className={classes.dialogs_item}>Иван</div>
				<div className={classes.dialogs_item}>Андрей</div>
			</div>
			<div className={classes.dialogs__messages}>
				<div className={classes.dialogs_message}>Привет</div>
				<div className={classes.dialogs_message}>Как дела?</div>
				<div className={classes.dialogs_message}>Нормально</div>
			</div>
			
		</div>
	)
}

export default Dialogs;