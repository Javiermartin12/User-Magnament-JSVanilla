export const getTrainingNameToPopulate = async () => {
    try {
        const trainingSelect = document.getElementById('convocationTrainingName')
        const response = await fetch('http://localhost:3000/trainingTechnicalSheets')
        if (!response.ok) {
            throw new Error('Failed to fetch training sheets');
        }
        const ttsheets = await response.json();
       
        ttsheets.forEach(sheet => {
            const option = document.createElement('option');
            option.value = sheet.id
            option.textContent = sheet.trainingName
            trainingSelect.appendChild(option)
        });

        trainingSelect.addEventListener('change', async (event) =>{
            const selectId = event.target.value
            
            await populateCourseForm(selectId)
        })
    } catch (error) {
        console.error('Error fetching training sheets:', error);
    }
}
const populateCourseForm = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/trainingTechnicalSheets/${id}`)
        if (!response.ok) {
            throw new Error('Failed to fetch course details');
        }
        const data = await response.json()

        populateMultiSelect(document.getElementById('convocationUnitService'), data.unitsServices)
        populateMultiSelect(document.getElementById('convocationTheoreticalInstructor'), data.theoreticalInstructors)
        populateMultiSelect(document.getElementById('convocationInstructors'), data.instructors)
        populateMultiSelect(document.getElementById('convocationAssessor'), data.assessors)
    } catch (error) {
        console.log(`Error fetching training details: ${error}`);
    }
}

const populateMultiSelect = (selectElement, values) => {
    selectElement.innerHTML = ''; 
    if (Array.isArray(values)) {
        values.forEach(value =>{
            const option = document.createElement('option');
            option.value = value
            option.textContent = value
            selectElement.appendChild(option)
        })
    } else {
        const option = document.createElement('option');
        option.value = values;
        option.textContent = values;
        selectElement.appendChild(option)
    }
}

