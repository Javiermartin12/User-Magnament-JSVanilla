import { deleteCourseCall } from "./deleteCourseCall.js"
export const getCourseCall = async () => {
    try {
        const response = await fetch('http://localhost:3000/courseCall')
        console.log(response)
        const courseCalls = await response.json()
        if (!Array.isArray(courseCalls) || courseCalls.length === 0) {
            console.error('There are no courseCall')
            alert('There are no courseCall')
            return
        }
        console.log(courseCalls)
         
        const courseCallTable = document.querySelector('#courseCallTable tbody')
        courseCalls.forEach(courseCall => {

            const row = document.createElement('tr')

            const trainingNameCell = document.createElement('td')
            trainingNameCell.innerHTML = courseCall.convocationTrainingName
            row.appendChild(trainingNameCell)

            const convocationUnitServiceCell = document.createElement('td')
            convocationUnitServiceCell.innerHTML = courseCall.convocationUnitService
            row.appendChild(convocationUnitServiceCell)

            const startDateCell = document.createElement('td')
            startDateCell.innerHTML = courseCall.startDate
            row.appendChild(startDateCell)

            const endDateCell = document.createElement('td')
            endDateCell.innerHTML = courseCall.endDate
            row.appendChild(endDateCell)

            const communicateDaysBeforeCell = document.createElement('td')
            communicateDaysBeforeCell.innerHTML = courseCall.communicateDaysBefore
            row.appendChild(communicateDaysBeforeCell)

            const timetableCell = document.createElement('td')
            timetableCell.innerHTML = courseCall.timetable
            row.appendChild(timetableCell)

            const convocationTheoreticalInstructorCell = document.createElement('td')
            convocationTheoreticalInstructorCell.innerHTML = courseCall.convocationTheoreticalInstructor
            row.appendChild(convocationTheoreticalInstructorCell)

            const convocationInstructorsCell = document.createElement('td')
            convocationInstructorsCell.innerHTML = courseCall.convocationInstructors
            row.appendChild(convocationInstructorsCell)

            const convocationAssessorCell = document.createElement('td')
            convocationAssessorCell.innerHTML = courseCall.convocationAssessorCell
            row.appendChild(convocationAssessorCell)

            const actionCell = document.createElement('td');

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete'
            deleteButton.addEventListener('click', async ()=>{
                await deleteCourseCall(courseCall.id)
            })

            actionCell.appendChild(deleteButton)
            row.appendChild(actionCell)

            courseCallTable.appendChild(row)
        })
    } catch (error) {
        alert('Dont received courseCall', error)
        console.log(error)
    }
}