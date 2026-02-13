import express from 'express';
import path from 'path';
import workoutsRoutes from './routes/workouts.js';
import exercisesRoutes from './routes/exercises.js';
import setsRoutes from './routes/sets.js';

const DIST = path.resolve('dist');
const app = express();
const PORT = 3000;


app.use(express.json());
app.use(express.static('dist')); 


app.get('/', (req, res) => {
  res.redirect('/home');
});

app.get('/home', (req, res) => {
  res.sendFile(path.join(DIST, 'index.html'));
});

app.get('/exercises', (req, res) => {
  res.sendFile(path.join(DIST, 'index.html'));
});

// API routes
app.use('/api/workouts', workoutsRoutes);
app.use('/api/exercises', exercisesRoutes);
app.use('/api/sets', setsRoutes)


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
