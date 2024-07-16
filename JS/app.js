import { getUsers } from "./services/userServices/getUsers.js"
import { pagination } from "./component/pagination.js"
import { postUser } from "./services/userServices/postUser.js"
import { getFriends } from "./services/userServices/getFriends.js"
import { postTraining } from "./services/trainingServices/postTraining.js"
document.addEventListener('DOMContentLoaded', () =>{
    pagination()
    postUser()
    getUsers()
    getFriends()

    postTraining()
    
    
})

