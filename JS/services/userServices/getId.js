export const checkIfIdExists = async (id) =>{
    try {
        const response = await fetch(`http://localhost:3000/users/${id}`)

        if (!response.ok) {
            if (response.status === 404) {
                return false; 
            }
            throw new Error('Error fetching the ID');
        }
        const user = await response.json();
        return user.id === id;   
     } catch (error) {
        console.error('Error to verify ID:', error);
        alert('Error to verify ID:', error);
    }
}