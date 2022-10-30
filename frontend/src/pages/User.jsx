import React, { useContext } from 'react';

import { AuthContext } from '../context/authContext';

const User = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div>
      {currentUser?.username}
      <br />
      {currentUser?.email}
      <br />
      {currentUser?.img}
    </div>
  );
};

export default User;
