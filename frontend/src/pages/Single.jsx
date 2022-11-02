import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import { Menu } from '../components';
import { AuthContext } from '../context/authContext';

const Single = () => {
  const [post, setPost] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split('/')[2];

  const { currentUser } = useContext(AuthContext);

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

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${postId}`);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent;
  };
  console.log(post);

  return (
    <div className="single">
      <div className="content">
        <img src={`../upload/${post?.img}`} alt="content" />

        <div className="user">
          {post.userImg && <img src={`../upload/${post.userImg}`} alt="user" />}

          <div className="info">
            <span>{post?.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>

          {currentUser.username === post.username && (
          <div className="edit">
            <Link to={`/write/?edit=${post.id}`} state={post}>
              <img src={Edit} alt="edit" />
            </Link>
            <Link to="/write/edit=2">
              <img onClick={handleDelete} src={Delete} alt="delete" />  {/*eslint-disable-line*/}
            </Link>
          </div>
          )}
        </div>

        <h1>{post.title}</h1>
        {getText(post.desc)}
      </div>
      <Menu cat={post.cat} />
    </div>
  );
};

export default Single;
