export const getFriends = async () => {
    try {
        const response = await fetch('http://localhost:3000/users')
        const users = await response.json()
        const userFriendsSelect = document.getElementById('usersFriends')
        userFriendsSelect.innerHTML = ''; 

        users.forEach(user => {
            const option = document.createElement('option')
            option.value = user.id
            option.value = option.textContent
            option.textContent = user.name
            userFriendsSelect.appendChild(option)
        });
      
    } catch (error) {
        console.error('Error fetching users:', error);
        
    }
   
}

