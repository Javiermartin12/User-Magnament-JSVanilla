export function pagination() {
     //Pages
     const pageUserMain = document.getElementById('main--container')
    const pageTraining = document.getElementById('secondary--container')
    //Form pages
     const formPage = document.getElementById('formUser')
     const btnNewUser = document.getElementById('newUserInput')
     const backBtn = document.getElementById('backForm')
     const btnTrainingTechSheet = document.getElementById('btnTrainingTechSheet')
     const formTrainingTSheet = document.getElementById('formTrainingTSheet')
     const backButtonTrainingPage = document.getElementById('backFormTraining')
     //Button sideBar
     const sideBarUserPage = document.getElementById('userPage')
     const sideBarTrainigPage = document.getElementById('trainingPage')
     const sideBarCoursePage = document.getElementById('coursePage')

   const buttonewUser = () => {
     btnNewUser.addEventListener('click', function(){
        pageUserMain.classList.add('hidden')
         formPage.classList.remove('hidden')
     })
     backBtn.addEventListener('click', function(){
        pageUserMain.classList.remove('hidden')
         formPage.classList.add('hidden')
     })}
     buttonewUser()

     const sideBarPagination = () => {
        sideBarUserPage.addEventListener('click',function () {
            pageUserMain.classList.remove('hidden')
            pageTraining.classList.add('hidden')
        })
        sideBarTrainigPage.addEventListener('click', ()=>{
            pageUserMain.classList.add('hidden')
            pageTraining.classList.remove('hidden')
        })
    }
    sideBarPagination()

    const buttonChangeToTrainingTSheet = () => {
        btnTrainingTechSheet.addEventListener('click', () =>{
            formTrainingTSheet.classList.remove('hidden')
            pageTraining.classList.add('hidden')
        })
        backButtonTrainingPage.addEventListener('click', () =>{
            formTrainingTSheet.classList.add('hidden')
            pageTraining.classList.remove('hidden')
        })
    }
    buttonChangeToTrainingTSheet()
     

}