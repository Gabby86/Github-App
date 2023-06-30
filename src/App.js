import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserPersonalData from './Components/UserPersonalData';
import UserRepositories from './Components/UserRepositories';








const App = () => {
  const [user, setUser] = useState(null);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetchUserData('enter your github username'); 
  }, []);

  const fetchUserData = async (username) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}?client_id=<YOUR_CLIENT_ID>&client_secret=<YOUR_CLIENT_SECRET>&sort=created`
      );
      setUser(response.data);
      fetchUserRepositories(username);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchUserRepositories = async (username) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos?client_id=<YOUR_CLIENT_ID>&client_secret=<YOUR_CLIENT_SECRET>&sort=created`
      );
      setRepositories(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    fetchUserData(username);
  };

  return (
    <div>
      <h1 className='user-info'>GitHub User Info</h1>
      <form onSubmit={handleSubmit}>
        <input className='input' type="text" name="username" placeholder="Enter GitHub username" />
        <button className='button' type="submit">Fetch User Info</button>
      </form>
      {user && <UserPersonalData user={user} />}
      {repositories.length > 0 && <UserRepositories repositories={repositories} />}
    </div>
  );
};

export default App;



