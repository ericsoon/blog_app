import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { db } from '../db.js';

export const register = (req, res) => {
  // Validation
  const q = 'SELECT * FROM tbusers WHERE email = ? or username = ?';

  db.query(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json('User already exist');

    // Hash password and crate a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = 'INSERT INTO tbusers(`username`, `email`, `password`) VALUES (?)';
    const values = [
      req.body.username,
      req.body.email,
      hash,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.status(200).json('User has been created');
    });
  });
};

export const login = (req, res) => {
  const q = 'SELECT * FROM tbusers WHERE username = ?';

  db.query(q, [req.body.username], (err, data) => {
    // Checking the user exist
    if (err) return res.json(err);
    if (data.length === 0) return res.status(404).json('User not found!');

    // Checking the password
    const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);

    if (!isPasswordCorrect) return res.status(400).json('Wrong Username or Password');

    const token = jwt.sign({ id: data[0].id }, 'jwtkey');
    const { password, ...other } = data[0];

    res.cookie('access_token', token, {
      httpOnly: true,
    }).status(200).json(other);

    bcrypt.compareSync(req.body.password, hash); // true
    bcrypt.compareSync('not_bacon', hash); // false
  });
};

export const logout = (req, res) => {

};
