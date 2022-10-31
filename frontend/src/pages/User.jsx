import React, { useContext } from 'react';

import { AuthContext } from '../context/authContext';

const User = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <div className="user">
      <form>
        <div className="img">
          {currentUser?.img}
        </div>

        <div className="profile">
          <input type="text" id="username" name="username" value={currentUser?.username} />
          <input type="text" id="username" name="username" value={currentUser?.email} />
        </div>
        <button type="button">Submit</button>

      </form>

    </div>
  );
};

export default User;
