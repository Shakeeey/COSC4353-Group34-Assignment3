// pages/register.js
import React from 'react';
import UserProfileForm from '../components/UserProfileForm'; 

const ProfilePage = () => {
  return (
    <div className="container">
      <h1>User Profile</h1>
      <UserProfileForm />
    </div>
  );
};

export default ProfilePage;