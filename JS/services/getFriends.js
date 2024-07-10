export const getFriends = async () => {
    try {
        const response = await fetch('http://localhost:3000/users')
        const users = await response.json()
        const userFriendsSelect = document.getElementById('usersFriends')
        users.forEach(user => {
            const option = document.createElement('option')
            option.textContent = user.name
            userFriendsSelect.appendChild(option)
        });
       return console.log(users)
    } catch (error) {
        console.error('Error fetching users:', error);
        
    }
   
}

