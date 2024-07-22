import { getUsers } from "./services/userServices/getUsers.js"
import { pagination } from "./component/pagination.js"
import { postUser } from "./services/userServices/postUser.js"
import { getFriends } from "./services/userServices/getFriends.js"
import { postTraining } from "./services/trainingServices/postTraining.js"
import { getTrainingTSheets } from "./services/trainingServices/getTraningTSheet.js"
import { postCourseCall } from "./services/courseServices/postCourseCall.js"
import { getCourseCall } from "./services/courseServices/getCourseCall.js"

document.addEventListener('DOMContentLoaded', () =>{
    pagination()
    postUser()
    getUsers()
    getFriends()
   
    postTraining()
    getTrainingTSheets()

    postCourseCall()
    getCourseCall()
    
})

