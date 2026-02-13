import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function check() {
    const db = await open({
        filename: './db/data.sqlite',
        driver: sqlite3.Database
    });

    // // Insert a workout
    // await db.run(
    //     'INSERT INTO workouts (date) VALUES (?)',
    //     ['2026-02-12']
    // );

    // await db.run(
    // `INSERT INTO exercises (workout_id, name, exercise_order)
    //  VALUES (?, ?, ?)`,
    // [1, 'Bench Press', 1]
    // );  

    // // Check workouts
    // const workouts = await db.all('SELECT * FROM workouts');
    // console.log(workouts);

    // const exercises = await db.all('SELECT * FROM workouts');
    // console.log(exercises);
    // await db.close()
    // 
    
    await db.run(
        `INSERT INTO sets (exercise_id, set_number, reps, weight)
        VALUES (?, ?, ?, ?)`,
        [1, 1, 9, 95]
    );
}

check();
