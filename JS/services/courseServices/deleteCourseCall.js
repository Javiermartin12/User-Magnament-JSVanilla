export const deleteCourseCall = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/courseCall/${id}`, {
            method: 'DELETE'
        })
        if (!response.ok) {
            console.log('Error TO DELETE user');
        }
    } catch (error) {
        console.log('User not deleted')
    }
}