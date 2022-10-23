import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

/* eslint-disable */
const Write = () => {
  const state = useLocation().state;
  // console.log(state)
  const [value, setValue] = useState(state?.desc || '');
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
    const imgUrl = await upload();
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

  return (
    <div className="add">
      <div className="content">
        <input type="text" value={title}  placeholder="Title" onChange={handleTitle} />
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

          <label className= "file" htmlFor="file">
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
            <label htmlFor="science">
              <input type="radio" checked={cat === 'science'} name="cat" value="science" id="science" onChange={handleCat} />
              Science
            </label>
          </div>

          <div className="cat">
            <label htmlFor="cinema">
              <input type="radio" checked={cat === 'cinema'} name="cat" value="cinema" id="cinema" onChange={handleCat} />
              Cinema
            </label>
          </div>

          <div className="cat">
            <label htmlFor="design">
              <input type="radio" checked={cat === 'design'} name="cat" value="design" id="design" onChange={handleCat} />
              Design
            </label>
          </div>

          <div className="cat">
            <label htmlFor="food">
              <input type="radio" checked={cat === 'food'} name="cat" value="food" id="food" />
              Food
            </label>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Write;
