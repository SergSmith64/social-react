import React from 'react';
import logo__1 from './ava__1.jpg';
import logo__2 from './ava__2.jpg';
import logo__3 from './ava__3.jpg';
import logo__4 from './ava__4.jpg';
import logo__5 from './ava__5.jpg';
import logo__6 from './ava__6.jpg';
import classes from './profile.module.css';
import Post from './post';

const Profile = () => {
	return (
		// <div className="profile__wrapper">
		<div className={classes.profile__wrapper}>

			<Post message='Hi, how are you' likesCount='0' />
			<Post message="Good Bye" likesCount='23' />

			{/* <div className="profile__item"> */}
			<div className={classes.profile__item}>
				<h3>Это чей-то Профиль</h3>
				<img src={logo__1} className={classes.ava} alt="avatar" />
				<h4>Описание профиля: интересы: музыка, кино, страны, где уже побывал</h4>
				<div className={classes.posts}>
					<div className={classes.posts__item}>Post 1</div>
					<div className={classes.posts__item}>Post 2</div>
					<div className={classes.posts__item}>Post 3</div>
				</div>
			</div>

			<div className={classes.profile__item}>
				<h3>Это чей-то Профиль</h3>
				<img src={logo__2} className={classes.ava} alt="avatar" />
				<h4>Описание профиля: интересы: музыка, кино, страны, где уже побывал</h4>
				<div className={classes.posts}>
					<div className={classes.posts__item}>Post 1</div>
					<div className={classes.posts__item}>Post 2</div>
					<div className={classes.posts__item}>Post 3</div>
				</div>
			</div>

			<div className={classes.profile__item}>
				<h3>Это чей-то Профиль</h3>
				<img src={logo__3} className={classes.ava} alt="avatar" />
				<h4>Описание профиля: интересы: музыка, кино, страны, где уже побывал</h4>
				<div className={classes.posts}>
					<div className={classes.posts__item}>Post 1</div>
					<div className={classes.posts__item}>Post 2</div>
					<div className={classes.posts__item}>Post 3</div>
				</div>
			</div>

			<div className={classes.profile__item}>
				<h3>Это чей-то Профиль</h3>
				<img src={logo__4} className={classes.ava} alt="avatar" />
				<h4>Описание профиля: интересы: музыка, кино, страны, где уже побывал</h4>
				<div className={classes.posts}>
					<div className={classes.posts__item}>Post 1</div>
					<div className={classes.posts__item}>Post 2</div>
					<div className={classes.posts__item}>Post 3</div>
				</div>
			</div>

			<div className={classes.profile__item}>
				<h3>Это чей-то Профиль</h3>
				<img src={logo__5} className={classes.ava} alt="avatar" />
				<h4>Описание профиля: интересы: музыка, кино, страны, где уже побывал</h4>
				<div className={classes.posts}>
					<div className={classes.posts__item}>Post 1</div>
					<div className={classes.posts__item}>Post 2</div>
					<div className={classes.posts__item}>Post 3</div>
				</div>
			</div>

			<div className={classes.profile__item}>
				<h3>Это чей-то Профиль</h3>
				<img src={logo__6} className={classes.ava} alt="avatar" />
				<h4>Описание профиля: интересы: музыка, кино, страны, где уже побывал</h4>
				<div className={classes.posts}>
					<div className={classes.posts__item}>Post 1</div>
					<div className={classes.posts__item}>Post 2</div>
					<div className={classes.posts__item}>Post 3</div>
				</div>
			</div>

		</div>
	)
}

console.log(classes);

export default Profile;