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
            option.value = sheet.trainingName
            option.textContent = sheet.trainingName
            trainingSelect.appendChild(option)
        });
        

    } catch (error) {
        console.error('Error fetching training sheets:', error);
    }
   

}
