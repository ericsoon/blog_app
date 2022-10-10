import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',

  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/auth/register', inputs);
      console.log(res);
    } catch (err) {
      setError(err.response.data);
    }
  };
  // console.log(inputs);
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder="username" name="username" onChange={handleChange} />
        <input required type="email" placeholder="email" name="email" onChange={handleChange} />
        <input required type="password" placeholder="password" name="password" onChange={handleChange} />
        <button type="button" onClick={handleSubmit}>Register</button>
        {error && <p>{error}</p>}
        <span>Create a new account? <Link to="/register">Register</Link></span>
      </form>
    </div>
  );
};

export default Register;
