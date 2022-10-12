import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import { Menu } from '../components';
import { AuthContext } from '../context/authContext';

const Single = () => {
  const [post, setPost] = useState([]);

  const location = useLocation();

  const postId = location.pathname.split('/')[2];

  const { currentUser } = useContext(AuthContext);

  // console.log(cat);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);
  return (
    <div className="single">
      <div className="content">
        <img src={post?.img} alt="content" />

        <div className="user">
          <img src="" alt="user" />

          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>

          {currentUser.username === post.username && (
          <div className="edit">
            <Link to="/write/?edit=2">
              <img src={Edit} alt="edit" />
            </Link>
            <Link to="/write/edit=2">
              <img src={Delete} alt="delete" />
            </Link>
          </div>
          )}
        </div>

        <h1>{post.title}</h1>
        {post.desc}
      </div>
      <Menu />
    </div>
  );
};

export default Single;
