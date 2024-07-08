
document.addEventListener('DOMContentLoaded', () =>{
    const pageMain = document.getElementById('main--container')
    const formPage = document.getElementById('formUser')
    const btnNewUser = document.getElementById('newUserInput')
    const backBtn = document.getElementById('backForm')
    btnNewUser.addEventListener('click', function(){
        pageMain.classList.add('hidden')
        formPage.classList.remove('hidden')
    })
    backBtn.addEventListener('click', function(){
        pageMain.classList.remove('hidden')
        formPage.classList.add('hidden')
    })
    
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
        
        alert('User saved correctly');
    } catch (error) {
        console.error('Error:', error);
        alert('There was a problem to signup user');
    }
    
  })
})

