const editUserModal = document.getElementById('editUserModal');
const editUserForm = document.getElementById('editUserForm');
const pageUser = document.getElementById('userPage')
export const updateUser = (user) => {

    document.getElementById('editIdUser').value = user.id
    document.getElementById('editUserName').value = user.name
    document.getElementById('editInputEmail').value = user.email
    document.getElementById('editInputPassword').value = user.password

    //clear existing options
    const editUsersFriends = document.getElementById('editUsersFriends')
    editUsersFriends.innerHTML = ''

    fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(users => {
            users.forEach(friend => {
                const option = document.createElement('option');
                option.value = friend.id
                option.textContent = friend.name
                if(user.friends.includes(friend.id)){
                    option.selected = true;
                }

                editUsersFriends.appendChild(option)
                
            })
        })
        editUserForm.classList.remove('hidden')
        pageUser.classList.add('hidden')
}

function closeUpdateUserModal() {
    editUserForm.classList.add('hidden')
        pageUser.classList.remove('hidden')
}