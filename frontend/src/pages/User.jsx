import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import { AuthContext } from '../context/authContext';
import userLogo from '../img/user.png';

/* eslint-disable */
const User = () => {
  const { currentUser } = useContext(AuthContext);
  const [username, setUsername] = useState(currentUser?.username || '');
  const [email, setEmail] = useState(currentUser?.email || '');
  const [file, setFile] = useState(null);


  const navigate = useNavigate();
   console.log(currentUser);

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await axios.post('/upload', formData);
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleUsername = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleFile = (e) => setFile(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();
    try {
      await axios.put(
        `/user/${currentUser.id}`,
        {
          username,
          email,
          img: file ? imgUrl : '',
        },
      );
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  console.log(`./upload/${currentUser.img}`)
  return (
    <div className="user">
      <form>
        <div className="img">
          <label className="file" htmlFor="file">
            {currentUser.img
              ? <img src={`../upload/${currentUser.img}`} alt={currentUser.username} className="img" />
              : <img src={userLogo} alt="logo" className="img" />}
            <input style={{ display: 'none' }} type="file" name="" id="file" onChange={handleFile} />
          </label>
        </div>

        <div className="profile">
          <input type="text" id="username" name="username" value={username} onChange={handleUsername} />
          <input type="text" id="email" name="email" value={email} onChange={handleEmail} />
        </div>
        <button type="button" onClick={handleSubmit}>Submit</button>

      </form>

    </div>
  );
};

export default User;
