import axios from 'axios';
import moment from 'moment';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import { useLocation, useNavigate } from 'react-router-dom';

/* eslint-disable */
const Write = () => {
  const state = useLocation().state;
  console.log(state)
  const [value, setValue] = useState(state?.title || '');
  const [title, setTitle] = useState(state?.title || '');
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || '');

  const navigate = useNavigate();
  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await axios.post('/upload', formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleTitle = (e) => setTitle(e.target.value);
  const handleFile = (e) => setFile(e.target.files[0]);
  const handleCat = (e) => setCat(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const imgUrl = upload();
    try {
      state
        ? await axios.put(
          `/posts/${state.id}`,
          {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : '',
          },
        )
        : await axios.post(
          '/posts/',
          { title,
            desc: value,
            cat,
            img: file ? imgUrl : '',
            date: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss') },
        );
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  { /* eslint-disable */}

  return (
    <div className="add">
      <div className="content">
        <input type="text" value={title} placeholder="Title" onChange={handleTitle} />
        <div className="editorContainer">
          <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>

          <label htmlFor="file">
            Upload Image
            <input style={{ display: 'none' }} type="file" name="" id="file" onChange={handleFile} />
          </label>
          <div className="buttons">
            <button type="button">Save as a draft</button>
            <button type="button" onClick={handleSubmit}>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Categoty </h1>

          <div className="cat">
            <label htmlFor="art">
              <input type="radio" checked={cat === 'art'} name="cat" value="art" id="art" onChange={handleCat} />
              Art
            </label>
          </div>

          <div className="cat">
            <label htmlFor="Science">
              <input type="radio" checked={cat === 'science'} name="cat" value="Science" id="Science" onChange={handleCat} />
              Science
            </label>
          </div>

          <div className="cat">
            <label htmlFor="Cinema">
              <input type="radio" checked={cat === 'cinema'} name="cat" value="Cinema" id="Cinema" onChange={handleCat} />
              Cinema
            </label>
          </div>

          <div className="cat">
            <label htmlFor="Design">
              <input type="radio" checked={cat === 'design'} name="cat" value="Design" id="Design" onChange={handleCat} />
              Design
            </label>
          </div>

          <div className="cat">
            <label htmlFor="Food">
              <input type="radio" checked={cat === 'food'} name="cat" value="Food" id="Food" />
              Food
            </label>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Write;
