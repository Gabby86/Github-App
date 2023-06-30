import React from 'react';

const UserRepositories = ({ repositories }) => {
  return (
    <div>
      <h2 className='repo'><u>User repositories</u></h2>
      <ul>
        {repositories.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserRepositories;

