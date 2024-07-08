
document.addEventListener('DOMContentLoaded', () =>{
  document.getElementById('createUser').addEventListener('submit', async function(event){
    event.preventDefault()

    const id = document.getElementById('idUser').value
    const name = document.getElementById('userName').value
    const email = document.getElementById('inputEmail').value
    const password = document.getElementById('inputPassword').value
    const data = { id, name, email, password}
    console.log(data)
    try {
        const response = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            
        })
        if (response.ok) {
            this.classList.add('hidden')
        }
        alert('User saved correctly');
    } catch (error) {
        console.error('Error:', error);
        alert('There was a problem to signup user');
    }
  })
})

