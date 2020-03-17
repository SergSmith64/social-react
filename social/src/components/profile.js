import React from 'react';
import logo__1 from './ava__1.jpg';
import logo__2 from './ava__2.jpg';
import logo__3 from './ava__3.jpg';
import logo__4 from './ava__4.jpg';
import logo__5 from './ava__5.jpg';
import logo__6 from './ava__6.jpg';
import './profile.css';

const Profile = () => {
	return (
		<div className="profile__wrapper">

			<div className="profile__item">
				<h3>Это чей-то Профиль</h3>
				<img src={logo__1} className="ava" alt="avatar" />
				<h4>Описание профиля: интересы: музыка, кино, страны, где уже побывал</h4>
				<div className="posts">
					<div className="posts__item">Post 1</div>
					<div className="posts__item">Post 2</div>
					<div className="posts__item">Post 3</div>
				</div>
			</div>

			<div className="profile__item">
				<h3>Это чей-то Профиль</h3>
				<img src={logo__2} className="ava" alt="avatar" />
				<h4>Описание профиля: интересы: музыка, кино, страны, где уже побывал</h4>
				<div className="posts">
					<div className="posts__item">Post 1</div>
					<div className="posts__item">Post 2</div>
					<div className="posts__item">Post 3</div>
				</div>
			</div>

			<div className="profile__item">
				<h3>Это чей-то Профиль</h3>
				<img src={logo__3} className="ava" alt="avatar" />
				<h4>Описание профиля: интересы: музыка, кино, страны, где уже побывал</h4>
				<div className="posts">
					<div className="posts__item">Post 1</div>
					<div className="posts__item">Post 2</div>
					<div className="posts__item">Post 3</div>
				</div>
			</div>

			<div className="profile__item">
				<h3>Это чей-то Профиль</h3>
				<img src={logo__4} className="ava" alt="avatar" />
				<h4>Описание профиля: интересы: музыка, кино, страны, где уже побывал</h4>
				<div className="posts">
					<div className="posts__item">Post 1</div>
					<div className="posts__item">Post 2</div>
					<div className="posts__item">Post 3</div>
				</div>
			</div>

			<div className="profile__item">
				<h3>Это чей-то Профиль</h3>
				<img src={logo__5} className="ava" alt="avatar" />
				<h4>Описание профиля: интересы: музыка, кино, страны, где уже побывал</h4>
				<div className="posts">
					<div className="posts__item">Post 1</div>
					<div className="posts__item">Post 2</div>
					<div className="posts__item">Post 3</div>
				</div>
			</div>

			<div className="profile__item">
				<h3>Это чей-то Профиль</h3>
				<img src={logo__6} className="ava" alt="avatar" />
				<h4>Описание профиля: интересы: музыка, кино, страны, где уже побывал</h4>
				<div className="posts">
					<div className="posts__item">Post 1</div>
					<div className="posts__item">Post 2</div>
					<div className="posts__item">Post 3</div>
				</div>
			</div>

		</div>
	)
}

export default Profile;