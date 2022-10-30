import React, {useState, useEffect}  from 'react'
import '../App.css';
import UserService from '../services/UserService.js';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function UpdateUser(){
    const params = useParams();
    const navigate = useNavigate();
    const [user,setUser] = useState({
        id:params.id,
        firstName:"",
        lastName:"",
        email:"",
    });
    

    const handleChange = (e) =>{
        console.log(e.target.value);
        const value = e.target.value;
        setUser({...user,[e.target.name]: value});
    }

    const updateUser = (e) =>{
        e.preventDefault();
        UserService.updateUser(user.id,user).then((response) =>{
            navigate("/userList")
        }).catch((error) =>{
            console.log(error);
        })
        
    }

    const clearForm = (e) =>{
        e.preventDefault();
        setUser({id:"",firstName:"",lastName:"",email:""});
    }

    useEffect(() => {
      const fetchData = async () =>  {
        try{
            console.log("im in here")
            const {data} = await UserService.getUser(params.id)
            setUser(data)
        }catch(error){
            console.log(error);
        }
      }
      fetchData();
    }, [])
    

  return (
    <div id="AddUserBox" className="flex max-w-2xl mx-auto shadow border-b">
        {/*Box within to encapsulate form */}
        <div className="px-8 py-8">
            <div id="AddUserHeader" className="font-thin text-2xl tracking-wider">
                <h1>Edit User</h1> 
            </div>   
            <div className="item-center justify-center h-14 w-full my-4"> 
                <label className="block text-gray-600 text-sm font-normal">
                    First Name: 
                </label>
                 <input 
                 type="text" 
                 name="firstName"
                 value={user.firstName}
                 onChange={(e) => handleChange(e)}
                 className="h-10 w-96 border mt-2 px-2 py-2"></input>  
            </div>
            <div className="item-center justify-center h-14 w-full my-4"> 
                <label className="block text-gray-600 text-sm font-normal">
                    Last Name: 
                </label>
                 <input 
                 type="text" 
                 name="lastName"
                 value={user.lastName}
                 onChange={(e) => handleChange(e)}
                 className="h-10 w-96 border mt-2 px-2 py-2"></input>  
            </div>
            <div className="item-center justify-center h-14 w-full my-4"> 
                <label className="block text-gray-600 text-sm font-normal">
                    Email: 
                </label>
                 <input 
                 type="text" 
                 name="email"
                 value={user.email}
                 onChange={(e) => handleChange(e)}
                 className="h-10 w-96 border mt-2 px-2 py-2"></input>  
            </div>
            <div className="item-center justify-center h-14 w-full my-4 space-x-4 pt-4"> 
                <button onClick={updateUser} className="rounded text-white font-semibold bg-green-400 py-2 px-2 hover:bg-green-800">Update</button>
                <button onClick={clearForm} className="rounded text-white font-semibold bg-red-400 py-2 px-2 hover:bg-red-800">Clear</button>
            </div>

        </div>   
    </div>
  )
}

export default UpdateUser