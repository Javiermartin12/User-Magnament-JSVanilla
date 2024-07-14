import { getUsers } from "./services/userServices/getUsers.js"
import { pagination } from "./component/pagination.js"
import { postUser } from "./services/userServices/postUser.js"
import { getFriends } from "./services/userServices/getFriends.js"
document.addEventListener('DOMContentLoaded', () =>{
    pagination()
    postUser()
    getUsers()
    getFriends()
    
    
})

