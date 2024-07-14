import { checkIfIdExists } from "./getId.js"
export const postUser = () => { 

        document.getElementById('createUser').addEventListener('submit', async function(event){
        event.preventDefault()

        const id = document.getElementById('idUser').value
        const name = document.getElementById('userName').value
        const email = document.getElementById('inputEmail').value
        const password = document.getElementById('inputPassword').value
        const friends = []

        const friendsSelect = document.getElementById('usersFriends')
        Array.from(friendsSelect.selectedOptions).forEach(option => {
            friends.push(option.textContent.trim())
        })

        const isIdExists = await checkIfIdExists(id)

        if (isIdExists) {
            alert(`ID ${id} already in use. Please choose other.`);
            return;
        }

        if (!id || !name || !email || !password) {
            alert('Please complete the form');
            return;
        }
        const data = { id, name, email, password, friends}
        
        try {
            const response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
                
            })
            
            alert('User saved correctly');
            } catch (error) {
            console.error('Error:', error);
            alert('There was a problem to signup user');
        }
        
    })
   
   

}