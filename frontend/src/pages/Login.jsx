import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  console.log('a');
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder="username" />
        <input required type="password" placeholder="password" />
        <button type="button">Login</button>
        <p>This is an error!</p>
        <span>Create a new account? <Link to="/register">Register</Link></span>
      </form>
    </div>
  );
};

export default Login;
