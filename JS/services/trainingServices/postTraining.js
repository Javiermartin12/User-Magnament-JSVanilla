
export const postTraining= () => {
    const formCreateTraining = document.getElementById('formCreateTraining')
    formCreateTraining.addEventListener('submit', async (event) =>{
        event.preventDefault()

        const trainingName = document.getElementById('trainingName').value
        const unitsServices = Array.from(document.getElementById('unitsServices').selectedOptions).map(option => option.textContent)
        const trainingPlan = document.getElementById('trainingPlan').value
        const typeOfTraining = Array.from(document.getElementById('typeOfTraining').selectedOptions).map(option => option.textContent)
        const duration = document.getElementById('duration').value
        const evaluationType = document.getElementById('evaluationType').value
        const objectives = document.getElementById('objectives').value
        const comments = document.getElementById('comments').value
        const students = Array.from(document.getElementById('students').selectedOptions).map(option => option.textContent)
        const theoreticalInstructors = Array.from(document.getElementById('theoreticalInstructors').selectedOptions).map(option => option.textContent)
        const instructors = Array.from(document.getElementById('instructors').selectedOptions).map(option => option.textContent)
        const assessors = Array.from(document.getElementById('assessors').selectedOptions).map(option => option.textContent)
        const survey = document.getElementById('survey').value

        if (!trainingName || !unitsServices || !typeOfTraining|| !duration || !evaluationType || !objectives || !comments 
             || !students  || !theoreticalInstructors || !instructors || !assessors) {
            alert('Please complete the form');
            return;
        }
        const data = { trainingName,
             unitsServices,
             trainingPlan,
             typeOfTraining,
             duration,
             evaluationType,
             objectives,
             comments,
             students,
             theoreticalInstructors, 
             instructors,
             assessors, 
             survey }
        
                  try {
                    const response = await fetch('http://localhost:3000/trainingTechnicalSheets', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                    })
                    alert('Training saved correctly');
                  } catch (error) {
                    console.error('Error:', error);
                    alert('There was a problem to signup training');
                  }

    })
}