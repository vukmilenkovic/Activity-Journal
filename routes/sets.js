import express from 'express';
import { openDB } from '../db/database.js';
const router = express.Router();

router.get('/', async (req, res) => {
  const db = await openDB();
  const sets = await db.all('SELECT * FROM sets');
  await db.close();

  res.json(sets);
});

export default router;