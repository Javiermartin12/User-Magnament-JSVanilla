import { deleteUser } from "./deleteUser.js"
export const getUsers = async () => {

    try {
        const response = await fetch('http://localhost:3000/users')
        
        const users = await response.json()
        
        const usersTableBody = document.querySelector('#userTable tbody')
        
        usersTableBody.innerHTML = ''
        users.forEach(user => {
            console.log(user)
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

            const deleteCell = document.createElement('td');
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete'
            deleteButton.addEventListener('click', async() => {
                await deleteUser(user.id)
            })
            deleteCell.appendChild(deleteButton)
            row.appendChild(deleteCell)

            usersTableBody.appendChild(row)
        });

    } catch (error) {
        console.error('Error fetching users:', error);
    }


}