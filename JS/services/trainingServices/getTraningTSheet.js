
export const getTrainingTSheets = async () => {
    try {
        const response = await fetch('http://localhost:3000/trainingTechnicalSheets')
        const sheets = await response.json()

        sheets.forEach(sheet => {
            const row = document.createElement('tr')

            const idCell = document.createElement('td')
            idCell.innerHTML = user.id
            row.appendChild(idCell)


            
        });
    } catch (error) {
        
    }
}