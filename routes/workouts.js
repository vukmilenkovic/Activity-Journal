import express from 'express';
import { openDB } from '../db/database.js';
const router = express.Router();

router.get('/', async (req, res) => {
    const db = await openDB();
    const workouts = await db.all('SELECT * FROM workouts');
    await db.close();

    res.json(workouts);
}); 

export default router;

