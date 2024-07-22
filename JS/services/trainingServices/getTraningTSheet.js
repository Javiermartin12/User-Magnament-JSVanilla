import { deleteTrainingTSheet } from "./deleteTriningTSheet.js"
export const getTrainingTSheets = async () => {
    try {
        const response = await fetch('http://localhost:3000/trainingTechnicalSheets')
        const sheets = await response.json()
        if (!Array.isArray(sheets) || sheets.length === 0) {
            console.error('There are no sheets')
            alert('There are no sheets')
            return;
        }

        const trainningTable = document.querySelector('#trainningTable tbody')

        sheets.forEach(sheet => {
            const row = document.createElement('tr')

            const trainingNameCell = document.createElement('td')
            trainingNameCell.innerHTML = sheet.trainingName
            row.appendChild(trainingNameCell)

            const unitsServicesCell = document.createElement('td')
            unitsServicesCell.innerHTML = sheet.unitsServices
            row.appendChild(unitsServicesCell)

            const trainingPlanCell = document.createElement('td')
            trainingPlanCell.innerHTML = sheet.trainingPlan
            row.appendChild(trainingPlanCell)

            const typeOfTrainingCell = document.createElement('td')
            typeOfTrainingCell.innerHTML = sheet.typeOfTraining
            row.appendChild(typeOfTrainingCell)

            const durationCell = document.createElement('td')
            durationCell.innerHTML = sheet.duration
            row.appendChild(durationCell)

            const evaluationTypeCell = document.createElement('td')
            evaluationTypeCell.innerHTML = sheet.evaluationType
            row.appendChild(evaluationTypeCell)

            const objectivesCell = document.createElement('td')
            objectivesCell.innerHTML = sheet.objectives
            row.appendChild(objectivesCell)

            const commentsCell = document.createElement('td')
            commentsCell.innerHTML = sheet.comments
            row.appendChild(commentsCell)

            const studentsCell = document.createElement('td')
            studentsCell.innerHTML = sheet.students
            row.appendChild(studentsCell)

            const theoreticalInstructorsCell = document.createElement('td')
            theoreticalInstructorsCell.innerHTML = sheet.theoreticalInstructors
            row.appendChild(theoreticalInstructorsCell)

            const instructorsCell = document.createElement('td')
            instructorsCell.innerHTML = sheet.instructors
            row.appendChild(instructorsCell)

            const assessorsCell = document.createElement('td')
            assessorsCell.innerHTML = sheet.assessors
            row.appendChild(assessorsCell)

            const surveyCell = document.createElement('td')
            surveyCell.innerHTML = sheet.survey
            row.appendChild(surveyCell)

            const actionCell = document.createElement('td');

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete'
            deleteButton.addEventListener('click', async ()=> {
                await deleteTrainingTSheet(sheet.id)
            })

            actionCell.appendChild(deleteButton)
            row.appendChild(actionCell)
            
            trainningTable.appendChild(row)
        });
    } catch (error) {
        alert('Error getting TTSheet') 
    }
}