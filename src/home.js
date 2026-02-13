function home(){
    const app = document.getElementById('app');
    const header = document.createElement('p');
    const exerciseTab = document.createElement('div');
    const nutritionTab = document.createElement('div');

    app.innerHTML = '';

    header.classList = 'header-home';
    header.textContent = 'This is a webpage that keeps the logs of your daily activities and calories';

    exerciseTab.classList = 'exercise-tab';
    exerciseTab.textContent = 'Gym';

    nutritionTab.classList = 'nutrition-tab';
    nutritionTab.textContent = 'Nutrition';


    app.appendChild(header);
    app.appendChild(exerciseTab);
    app.appendChild(nutritionTab);


    exerciseTab.addEventListener('click', () => {
        window.location.href = '/exercises';
    });
}

export default home;