export const deleteUser = async (id) => {

    try {
        const response = await fetch(`http://localhost:3000/users/${id}`, {
            method: 'DELETE'
        })
        if (!response.ok) {
            console.log('Error TO DELETE user');
        }
    } catch (error) {
        console.log('User not deleted')
    }

}