import { getTrainingNameToPopulate } from "./dinamicForm/getTrainingNameToPopulate.js"

import { sendConvocation } from "./dinamicForm/sendConvocation.js"
export const postCourseCall = () => {
    getTrainingNameToPopulate()


    const submitCourseCall = document.getElementById('submitCourseCall')
    submitCourseCall.addEventListener('click', async (event) =>{
        event.preventDefault()
        const convocationTrainingName = document.getElementById('convocationTrainingName').value
        const convocationUnitService = document.getElementById('convocationUnitService').value
        const startDate = document.getElementById('startDate').value
        const endDate = document.getElementById('endDate').value
        const communicateDaysBefore = document.getElementById('communicateDaysBefore').value
        const timetable = document.getElementById('timetable').value
        const convocationTheoreticalInstructor = document.getElementById('convocationTheoreticalInstructor').value
        const convocationInstructors = document.getElementById('convocationInstructors').value
        const convocationAssessor = document.getElementById('convocationAssessor').value
        sendConvocation()
    })
}