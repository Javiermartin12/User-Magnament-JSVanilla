import { deleteUser } from "./deleteUser.js"

export const getUsers = async () => {

    try {
        const response = await fetch('http://localhost:3000/users')
        const users = await response.json()
        
        const usersTableBody = document.querySelector('#userTable tbody')
        
       
        users.forEach(user => {
            
            const row = document.createElement('tr')

            const idCell = document.createElement('td')
            idCell.innerHTML = user.id
            row.appendChild(idCell)

            const nameCell = document.createElement('td')
            nameCell.innerText = user.name
            row.appendChild(nameCell)

            const emailCell = document.createElement('td')
            emailCell.textContent = user.email
            row.appendChild(emailCell)

            const passwordCell = document.createElement('td')
            passwordCell.textContent = user.password
            row.appendChild(passwordCell)

            //Verify per user.id if exist
            const friendsCell = document.createElement('td')
            const getFriendName = (friendId, users) =>{
                const friend = users.find(u => u.name === friendId )
                return friend ? friend.name : 'Unknown';
            }
            // Verified if user.friends is an array and map the name
            const friends = Array.isArray(user.friends) ?
            user.friends.filter(friendId => friendId !== null).map(friendId => getFriendName(friendId, users)).join(', ')
            : 'No friends'

            friendsCell.textContent = friends || 'No friends'
            row.appendChild(friendsCell)

            const deleteCell = document.createElement('td');
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete'
            deleteButton.addEventListener('click', async() => {
                await deleteUser(user.id)
            })
            deleteCell.appendChild(deleteButton)
            row.appendChild(deleteCell)

            usersTableBody.appendChild(row)
        })

    } catch (error) {
        console.error('Error fetching users:', error);
    }


}