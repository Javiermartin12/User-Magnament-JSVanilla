import { getTrainingNameToPopulate } from "./dinamicForm/getTrainingNameToPopulate.js"

import { sendConvocation } from "./dinamicForm/sendConvocation.js"
export const postCourseCall =  () => {
    getTrainingNameToPopulate()
    const createCourse = document.getElementById('createCourse')
    if (!createCourse) {
        console.error('Form not found');
        return;
    }

    const submitCourseCall = document.getElementById('createCourse')
    submitCourseCall.addEventListener('submit', async (event) =>{
        event.preventDefault()
        const convocationTrainingNameElement = document.getElementById('convocationTrainingName')
        const convocationTrainingName = convocationTrainingNameElement.options[convocationTrainingNameElement.selectedIndex].textContent;
        const convocationUnitService = Array.from(document.getElementById('convocationUnitService').selectedOptions).map(option => option.textContent)
        const startDate = document.getElementById('startDate').value
        const endDate = document.getElementById('endDate').value
        const communicateDaysBefore = document.getElementById('communicateDaysBefore').value
        const timetable = document.getElementById('timetable').value
        const convocationTheoreticalInstructor = Array.from(document.getElementById('convocationTheoreticalInstructor').selectedOptions).map(option => option.textContent)
        const convocationInstructors = Array.from(document.getElementById('convocationInstructors').selectedOptions).map(option => option.textContent)
        const convocationAssessor = Array.from(document.getElementById('convocationAssessor').selectedOptions).map(option => option.textContent)
        sendConvocation()

        if (!convocationTrainingName || !convocationUnitService.length || !startDate || !endDate || !communicateDaysBefore || !timetable
            || !convocationTheoreticalInstructor.length || !convocationInstructors.length || !convocationAssessor.length) {
            alert('Complete the form')
            return
        }

        const data = {
            convocationTrainingName,
            convocationUnitService,
            startDate,
            endDate,
            communicateDaysBefore,
            timetable,
            convocationTheoreticalInstructor,
            convocationInstructors,
           convocationAssessor
            }
            console.log(data)
            try {
                const response = await fetch('http://localhost:3000/courseCall', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body:JSON.stringify(data)
                })
                if (response.ok) {
                    alert('CourseCall saved correctly');
                } else {
                    throw new Error('Failed to save CourseCall');
                }
                console.log(response)
                alert('CourseCall saved correctly')
            } catch (error) {
                alert('There was a problem to post courseCall');
                console.log(error)
            }
    })
}