export function pagination(params) {
     //pagination
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
}