import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');
  console.log(value);
  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" />
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
            <input style={{ display: 'none' }} type="file" name="" id="file" />
          </label>
          <div className="buttons">
            <button type="button">Save as a draft</button>
            <button type="button">Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Categoty </h1>

          <div className="cat">
            <label htmlFor="art">
              <input type="radio" name="cat" value="art" id="art" />
              Art
            </label>
          </div>

          <div className="cat">
            <label htmlFor="Science">
              <input type="radio" name="cat" value="Science" id="Science" />
              Science
            </label>
          </div>

          <div className="cat">
            <label htmlFor="Cinema">
              <input type="radio" name="cat" value="Cinema" id="Cinema" />
              Cinema
            </label>
          </div>

          <div className="cat">
            <label htmlFor="Design">
              <input type="radio" name="cat" value="Design" id="Design" />
              Design
            </label>
          </div>

          <div className="cat">
            <label htmlFor="Food">
              <input type="radio" name="cat" value="Food" id="Food" />
              Food
            </label>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Write;
