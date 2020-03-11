import React from 'react';
import logo from './logo-5ka__2.jpg';
import './profile.css';

const Profile = () => {
  return (
    <div className="profile-wrapper">
      <h3>Это чей-то Профиль</h3>
      <img src={logo} className="logo5" alt="logo" />
      <h4>Описание профиля: интересы: музыка, кино, страны, где уже побывал</h4>
      <div className="posts">
        <div className="posts__item">Post 1</div>
        <div className="posts__item">Post 2</div>
        <div className="posts__item">Post 3</div>
      </div>
    </div>
  )
}

export default Profile;