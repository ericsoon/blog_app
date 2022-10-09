import React from 'react';

import Logo from '../img/logo.png';

const Footer = () => {
  console.log('a');
  return (
    <footer>
      <img src={Logo} alt="logo" />
      <span>Made by <b>React.js</b>.</span>
    </footer>
  );
};

export default Footer;
