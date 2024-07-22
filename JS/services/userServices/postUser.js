import {checkIfIdExists} from '../userServices/getId.js'
export const postUser = () => { 

        const userForm = document.getElementById('createUser')
            userForm.addEventListener('submit', async (event) =>{
                
        event.preventDefault()


        const id = document.getElementById('idUser').value
        const name = document.getElementById('userName').value
        const email = document.getElementById('inputEmail').value
        const password = document.getElementById('inputPassword').value
        const friends =  Array.from(document.getElementById('usersFriends').selectedOptions).map(option => option.textContent)
       

        const data = { id, name, email, password, friends}


        try {
            const isIdExists = await checkIfIdExists(id)
            if (!id || !name || !email || !password) {
                alert('Please complete the form');
                return;
            } else if (isIdExists) {
                alert(`ID ${id} already in use. Please choose another.`);
                return;
            }
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