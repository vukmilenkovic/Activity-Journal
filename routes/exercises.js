import express from 'express';
import { openDB } from '../db/database.js';
const router = express.Router();

router.get('/', async (req, res) => {
  const db = await openDB();
  const exercises = await db.all('SELECT * FROM exercises');
  await db.close();

  res.json(exercises);
});

export default router;