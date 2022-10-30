import axios from "axios";

const USER_API_BASE_URL="http://localhost:8080/api/v1/users";

class UserService {
    saveUser(user){
        console.log(USER_API_BASE_URL)
        return axios.post(USER_API_BASE_URL,user);
    }

    getUser(id){
        console.log("getting user");
        return axios.get(USER_API_BASE_URL + "/"+ id);
    }
    
    getAllUsers(){
        console.log("getting all users");
        return axios.get(USER_API_BASE_URL);
    }
    
    deleteUser(id){
        console.log("deleting user");
        return axios.delete(USER_API_BASE_URL + "/"+ id)
    }

    updateUser(id,user){
        return axios.put(USER_API_BASE_URL + "/"+ id,user)
    }

}
export default new UserService();