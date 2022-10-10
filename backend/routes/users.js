import express from 'express';

import { addUsers } from '../controllers/user.js';

const router = express.Router();

router.get('/test', addUsers);

export default router;
