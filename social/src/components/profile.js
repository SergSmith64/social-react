import React from 'react';
import logo from './logo-5ka__2.jpg';
import './profile.css';

const Profile = () => {
  return (
    <div>
      <h3>Это чей-то Профиль</h3>
      <img src={logo} className="logo5" alt="logo" />
    </div>
  )
}

export default Profile;