export const checkIfIdExists = async (id) =>{
    try {
        const response = await fetch(`http://localhost:3000/users/${id}`)
        const data = await response.json();
        return !!data; // true if exist and false if  not exist
    } catch (error) {
        console.error('Error to verify ID:', error);
        return false
    }
}