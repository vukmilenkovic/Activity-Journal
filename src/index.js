import './style.css';
import gymSection from './gym.js';
import home from './home.js';
const path = window.location.pathname;



// async function loadExercises() {
//     try {
//         const response = await fetch('/api/exercises');
//         if (!response.ok) throw new Error('Network response was not ok');

//         const exercises = await response.json();
//         console.log('Exercises:', exercises);

//         const app = document.getElementById('app');
//         const list = document.createElement('ul');
//         list.classList = 'exercise-list';
//         app.appendChild(list);

//         exercises.forEach(ex => {
//             const li = document.createElement('li');
//             li.textContent = `${ex.date} - ${ex.name}: ${ex.sets} sets x ${ex.reps} reps @ ${ex.weight}kg`;
//             list.appendChild(li);
//         });
//     } catch (err) {
//         console.error('Error fetching exercises:', err);
//     }
// }



if (path === '/' || path === '/home') {
  home();
} else if (path === '/exercises') {
  gymSection();
  
}


