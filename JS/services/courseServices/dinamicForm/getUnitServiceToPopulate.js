
export const getUnitServiceToPopulate = async () => {
    try {
        const convocationUnitService = document.getElementById('convocationUnitService')
        const response = await fetch('http://localhost:3000/trainingTechnicalSheets')

        const ttsheets = await response.json();

        ttsheets.forEach(sheet => {
            const option = document.createElement('option')
            option.value = sheet.unitsServices
            option.textContent = sheet.unitsServices
            convocationUnitService.appendChild(option)
        });

    } catch (error) {
                console.error('Error fetching training sheets:', error);

    }
}