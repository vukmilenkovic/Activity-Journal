// TODO: Create a module that will display some number of previous gym sessions to the user below the form content of the page.

function gymSection(){
  
    // Load field 
    const app = document.getElementById('app');
    const gymSectionHeader = document.createElement('p');
    const exerciseForm = document.createElement('form');

    gymSectionHeader.textContent = "This is the gym section of the website, here you can log your exercises that you did.";
    gymSectionHeader.classList = "gym-section-header";

    exerciseForm.id = "exercise-form";
    exerciseForm.innerHTML = `
        <label>
            Exercise name
            <input type="text" name="name">
        </label>

        <label>
            Sets
            <input type="number" name="sets">
        </label>

        <label>
            Reps
            <input type="number" name="reps">
        </label>

        <label>
            Weight
            <input type="number" step="0.1" name="weight">
        </label>

        <label>
            Date
            <input type="date" name="date">
        </label>

        <button type="submit">Save</button>
        
    `



    app.appendChild(gymSectionHeader);
    app.appendChild(exerciseForm);

}




export default gymSection;