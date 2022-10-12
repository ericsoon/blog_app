import { db } from '../db.js';

export const getPosts = (req, res) => {
  const q = req.query.cat
    ? 'SELECT * FROM tbposts WHERE cat = ?'
    : 'SELECT * FROM tbposts';

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {
  res.json('from ctontroller');
};

export const addPost = (req, res) => {
  res.json('from ctontroller');
};

export const deletePost = (req, res) => {
  res.json('from ctontroller');
};

export const updatePost = (req, res) => {
  res.json('from ctontroller');
};

