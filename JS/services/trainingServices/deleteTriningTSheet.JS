export const deleteTrainingTSheet = async (id) => {

    try {
        const response = await fetch(`http://localhost:3000/trainingTechnicalSheets/${id}`, {
            method: 'DELETE'
        })
        if (!response.ok) {
            console.log('Error TO DELETE TTSheet');
        }
    } catch (error) {
        console.log('TTSheet not deleted')
    }
}