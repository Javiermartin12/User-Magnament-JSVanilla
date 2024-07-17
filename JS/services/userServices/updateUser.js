const editUserModal = document.getElementById('editUserModal');
const editUserForm = document.getElementById('editUserForm');
const pageUser = document.getElementById('userPage')
export const updateUser = (users) => {
    console.log('User passed to updateUser:', users);
    if (!users) {
        console.error('User is undefined');
        return;
    }
    document.getElementById('editIdUser').value = users.id
    document.getElementById('editUserName').value = users.name
    document.getElementById('editInputEmail').value = users.email
    document.getElementById('editInputPassword').value = users.password
    document.getElementById('editUsersFriends').value = users.friends
    //clear existing options
    // const editUsersFriends = document.getElementById('editUsersFriends')
    // editUsersFriends.innerHTML = ''

    fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(users => {
            users.forEach(friend => {
                const option = document.createElement('option');
                option.value = friend.id
                option.textContent = friend.name
                if(users.friends.includes(friend.id)){
                    option.selected = true;
                }

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
           const friends = Array.from(document.getElementById('editUsersFriends').selectedOptions).map(option => parseInt(option.value))
    
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



// export const putUserUpdated = () => {
//     editUserModal.addEventListener('submit', async(event) => {
//         event.preventDefault()

//        const id = document.getElementById('editIdUser').value 
//        const name = document.getElementById('editUserName').value 
//        const email = document.getElementById('editInputEmail').value 
//        const password = document.getElementById('editInputPassword').value 
//        const friends = Array.from(document.getElementById('editUsersFriends').selectedOptions).map(option => parseInt(option.value))

//        const updatedUser = { id, name, email, password, friends }

//        try {
//         const response = await fetch(`http://localhost:3000/users/${id}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(updatedUser)
//         })
//         if (response.ok) {
//             alert('User updated successfully');
            
//         } else {
//             alert('Failed to update user');
//         }
        
//        } catch (error) {
//         console.error('Error:', error);
//         alert('There was a problem updating the user');

//        }
//     })
//     putUserUpdated()

// }