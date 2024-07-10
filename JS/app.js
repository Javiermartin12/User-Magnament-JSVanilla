import { getUsers } from "./services/getUsers.js"
import { pagination } from "./component/pagination.js"
import { postUser } from "./services/postUser.js"
import { getFriends } from "./services/getFriends.js"
document.addEventListener('DOMContentLoaded', () =>{
    pagination()
    postUser()
    getUsers()
    
    
})

