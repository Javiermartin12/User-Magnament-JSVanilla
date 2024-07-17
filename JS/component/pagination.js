export function pagination() {
     //Pages
    const pageUser = document.getElementById('userPage')
    const pageTraining = document.getElementById('trainingPage')
    const pageCourse = document.getElementById('coursePage')
    //Form pages
     const formPage = document.getElementById('formUser')
     const btnNewUser = document.getElementById('newUserInput')
     const backBtn = document.getElementById('backForm')
     const btnTrainingTechSheet = document.getElementById('btnTrainingTechSheet')
     const formTrainingTSheet = document.getElementById('formTrainingTSheet')
     const backButtonTrainingPage = document.getElementById('backFormTraining')
     const formCourseCall = document.getElementById('formCourseCall')
     const btnCourseCall = document.getElementById('btnCourseCall')
     const backCoursePageButton = document.getElementById('backCoursePageButton')
     const backBtnUserPage = document.getElementById('backBtnUserPage')
     const formUpdateUser = document.getElementById('formUpdateUser')
     //Button sideBar
     const sideBarUserPage = document.getElementById('userPageButton')
     const userPageButton2 = document.getElementById('userPageButton2')
     const sideBarTrainigPage = document.getElementById('trainingPageButton')
     const trainingPageButton2 = document.getElementById('trainingPageButton2')
     const sideBarCoursePage = document.getElementById('coursePageButton')
     const coursePageButton2 = document.getElementById('coursePageButton2')
     
     
     
     btnNewUser.addEventListener('click', () => {
         pageUser.classList.add('hidden')
         formPage.classList.remove('hidden')
        })
        backBtn.addEventListener('click', () => {
            pageUser.classList.remove('hidden')
            formPage.classList.add('hidden')
        })
        backBtnUserPage.addEventListener('click', () => {
            pageUser.classList.remove('hidden')
            formUpdateUser.classList.add('hidden')
        })
        
        btnTrainingTechSheet.addEventListener('click', () => {
            formTrainingTSheet.classList.remove('hidden')
            pageTraining.classList.add('hidden')
        })
        backButtonTrainingPage.addEventListener('click', () => {
            formTrainingTSheet.classList.add('hidden')
            pageTraining.classList.remove('hidden')
        })

        btnCourseCall.addEventListener('click', () => {
            formCourseCall.classList.remove('hidden')
            pageCourse.classList.add('hidden')
        })

        backCoursePageButton.addEventListener('click', () =>{
            formCourseCall.classList.add('hidden')
            pageCourse.classList.remove('hidden')
        })

     const paginationSideBar = () => {
        sideBarUserPage.addEventListener('click', () => {
            pageUser.classList.remove('hidden')
            pageTraining.classList.add('hidden')
            pageCourse.classList.add('hidden')
        })
        userPageButton2.addEventListener('click', () => {
            pageUser.classList.remove('hidden')
            pageTraining.classList.add('hidden')
            pageCourse.classList.add('hidden')
        })
        sideBarTrainigPage.addEventListener('click', () => {
            pageTraining.classList.remove('hidden')
            pageCourse.classList.add('hidden')
            pageUser.classList.add('hidden')
            
        })
        trainingPageButton2.addEventListener('click', () => {
            pageTraining.classList.remove('hidden')
            pageCourse.classList.add('hidden')
            pageUser.classList.add('hidden')
        })
        coursePageButton2.addEventListener('click', () => {
            pageCourse.classList.remove('hidden')
            pageTraining.classList.add('hidden')
            pageUser.classList.add('hidden')
        })
        sideBarCoursePage.addEventListener('click', () => {
            pageCourse.classList.remove('hidden')
            pageTraining.classList.add('hidden')
            pageUser.classList.add('hidden')
        })
     }
     paginationSideBar()
    


    
     

}
pagination()