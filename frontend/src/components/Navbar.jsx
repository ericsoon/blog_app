import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

import Logo from '../img/logo.png';

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="links">
          <Link to="?cat=art" className="link">
            <h6>Art</h6>
          </Link>
          <Link to="?cat=science" className="link">
            <h6>Science</h6>
          </Link>
          <Link to="?cat=cinema" className="link">
            <h6>Cinema</h6>
          </Link>
          <Link to="?cat=design" className="link">
            <h6>Design</h6>
          </Link>
          <Link to="?cat=food" className="link">
            <h6>Food</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>
              Logout
            </span>
          ) : (
            <Link to="/login" className="link">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
