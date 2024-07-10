export const getFriends = async () => {
    try {
        const response = await fetch('http://localhost:3000/users')
        const users = response.json()
        const usersFriendsSelect = document.getElementById('usersFriends')
        users.forEach(user => {
            const option = document.createElement('option')
            option.value = user.id;
            option.textContent = user.name;
            usersFriendsSelect.appendChild(option)
        });
    } catch (error) {
        console.error('Error fetching users:', error);
    }
   
}

