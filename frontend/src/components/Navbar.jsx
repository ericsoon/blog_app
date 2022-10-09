import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../img/logo.png';

const Navbar = () => {
  console.log('a');
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="links">
          <Link to="?cat=art" className="link">
            <h6>Art</h6>
          </Link>
          <Link to="?cat=art" className="link">
            <h6>Science</h6>
          </Link>
          <Link to="?cat=art" className="link">
            <h6>Cinema</h6>
          </Link>
          <Link to="?cat=art" className="link">
            <h6>Design</h6>
          </Link>
          <Link to="?cat=art" className="link">
            <h6>Food</h6>
          </Link>
          <span>John</span>
          <span>Logout</span>
          <span className="write">
            <Link className="link" to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
