
const editUserForm = document.getElementById('editUserForm');

export const updateUser = (users) => {
    
    const id = document.getElementById('editIdUser')
    id.value = users.id
    const name = document.getElementById('editUserName')
    name.value = users.name
    const email = document.getElementById('editInputEmail')
    email.value = users.email
    const password = document.getElementById('editInputPassword')
    password.value = users.password
    const friends =document.getElementById('editUsersFriends')
    friends.value = users.friends

   

    fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(users => {
           
            users.forEach(friend => {

                const option = document.createElement('option');
                option.value = friend.name
                option.textContent = friend.name
                console.log(option)
                editUsersFriends.appendChild(option)
                
            })
        })
        const putUserUpdated = () => {
            editUserForm.addEventListener('submit', async(event) => {
            event.preventDefault()
    
           const id = document.getElementById('editIdUser').value 
           const name = document.getElementById('editUserName').value 
           const email = document.getElementById('editInputEmail').value 
           const password = document.getElementById('editInputPassword').value 
           const friends = Array.from(document.getElementById('editUsersFriends').selectedOptions).map(option => option.value)
    
           const updatedUser = { id, name, email, password, friends }
    
           try {
            const response = await fetch(`http://localhost:3000/users/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedUser)
            })
            if (response.ok) {
                alert('User updated successfully');
                
            } else {
                alert('Failed to update user');
            }
            
           } catch (error) {
            console.error('Error:', error);
            alert('There was a problem updating the user');
    
           }
        })}
        putUserUpdated()
    
        
}


