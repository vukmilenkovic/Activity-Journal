// db/init.js
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function init() {
    const db = await open({
        filename: './db/data.sqlite',
        driver: sqlite3.Database
    });

    await db.exec(`CREATE TABLE workouts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        date TEXT NOT NULL
    );`);


    await db.exec(`CREATE TABLE exercises (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    workout_id INTEGER NOT NULL,
    name TEXT NOT NULL,
    exercise_order INTEGER,
    FOREIGN KEY (workout_id) REFERENCES workouts(id)
    );`);


    await db.exec(`CREATE TABLE sets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    exercise_id INTEGER NOT NULL,
    set_number INTEGER NOT NULL,
    reps INTEGER NOT NULL,
    weight REAL NOT NULL,
    FOREIGN KEY (exercise_id) REFERENCES exercises(id)
    );`);

    console.log('Database initialized!');
    await db.close();
}








init();

