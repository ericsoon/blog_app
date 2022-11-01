/* eslint-disable */
import express from 'express';
import cookieParser from 'cookie-parser';
import multer from 'multer';

import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';
import postRoutes from './routes/posts.js';

const app = express();

app.use(express.json());
app.use(cookieParser());

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, '../frontend/public/upload');
  },
  filename(req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post('/api/upload', upload.single('file'), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/posts', postRoutes);

app.listen(8800, () => {
  console.log('test');
});
