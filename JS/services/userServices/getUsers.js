import { deleteUser } from "../userServices/deleteUser.js";
import { updateUser } from "./updateUser.js";
const pageUser = document.getElementById('userPage')
const formUpdateUser = document.getElementById('formUpdateUser')
export const getUsers = async () => {

    try {
        const response = await fetch('http://localhost:3000/users')
        const users = await response.json()

        if (!Array.isArray(users) || users.length === 0) {
            console.error('There are no users')
            alert('There are no users')
            return;
        }
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

            const editButton = document.createElement('button');
            editButton.textContent = 'Update'
            editButton.addEventListener('click', () => {
                console.log('User clicked for update:', user);
                 pageUser .classList.add('hidden')
                 formUpdateUser.classList.remove('hidden')
                //  const userToUpdate = users.find(u => u.id === user.id);
                updateUser(user)
                
            })
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete'
            deleteButton.addEventListener('click', async() => {
                await deleteUser(user.id)
            })
            deleteCell.appendChild(editButton)
            deleteCell.appendChild(deleteButton)
            row.appendChild(deleteCell)

            usersTableBody.appendChild(row)
        })

    } catch (error) {
        console.error('Error fetching users:', error);
    }


}