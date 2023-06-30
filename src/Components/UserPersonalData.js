import React from 'react';

const UserPersonalData = ({ user }) => {
  return (
    <div className='user-data'>
      <img src={user.avatar_url} alt="User Avatar" />
      <p><b>Fullname:</b> {user.name}</p>
      <p><b>Username:</b> {user.login}</p>
      <p><b>Location:</b> {user.location}</p>
      <p><b>Email Address:</b> {user.email}</p>
    </div>
  );
};

export default UserPersonalData;
