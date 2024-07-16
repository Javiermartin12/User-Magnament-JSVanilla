
export const postTraining= () => {
    const formCreateTraining = document.getElementById('formCreateTraining')
    formCreateTraining.addEventListener('submit', async (event) =>{
        event.preventDefault()

        const trainingName = document.getElementById('trainingName').value
        const unitsServices = document.getElementById('unitsServices').value
        const trainingPlan = document.getElementById('trainingPlan').value
        const typeOfTraining = document.getElementById('typeOfTraining').value
        const duration = document.getElementById('duration').value
        const evaluationType = document.getElementById('evaluationType').value
        const objectives = document.getElementById('objectives').value
        const comments = document.getElementById('comments').value
        const students = document.getElementById('students').value
        const theoreticalInstructors = document.getElementById('theoreticalInstructors').value
        const instructors = document.getElementById('instructors').value
        const assessors = document.getElementById('assessors').value
        const survey = document.getElementById('survey').value

        if (!trainingName || !unitsServices || !typeOfTraining|| !duration || !evaluationType || !objectives || !comments 
             || !students  || !theoreticalInstructors || !instructors || !assessors || !survey) {
            alert('Please complete the form');
            return;
        }
        const data = { trainingName,
             unitsServices: [],
              trainingPlan,
               typeOfTraining,
                duration,
                 evaluationType,
                  objectives, 
                  comments,
                  students: [],
                  theoreticalInstructors, 
                  instructors,
                  assessors: [], 
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