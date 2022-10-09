import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  console.log('a');
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder="username" />
        <input required type="email" placeholder="email" />
        <input required type="password" placeholder="password" />
        <button type="button">Register</button>
        <p>This is an error!</p>
        <span>Create a new account? <Link to="/register">Register</Link></span>
      </form>
    </div>
  );
};

export default Register;
