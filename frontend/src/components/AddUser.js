import React, {useState} from 'react'
import '../App.css';
import UserService from '../services/UserService.js';
import axios from 'axios';

function AddUser(){
    const [user,setUser] = useState({
        id:"",
        firstName:"",
        lastName:"",
        email:"",
    });

    const handleChange = (e) =>{
        console.log(e.target.value);
        const value = e.target.value;
        setUser({...user,[e.target.name]: value});
    }

    const saveUser = (e) =>{
        e.preventDefault();
        UserService.saveUser(user).then((response) =>{
            console.log(response);
        }).catch((error)=>{
            console.log(error)
        })
    }

  return (
    //Box border for adding user
    <div id="AddUserBox" className="flex max-w-2xl mx-auto shadow border-b">
        {/*Box within to encapsulate form */}
        <div className="px-8 py-8">
            <div id="AddUserHeader" className="font-thin text-2xl tracking-wider">
                <h1>Add User</h1> 
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
                <button onClick={saveUser} className="rounded text-white font-semibold bg-green-400 py-2 px-2 hover:bg-green-800">Save</button>
                <button className="rounded text-white font-semibold bg-red-400 py-2 px-2 hover:bg-red-800">Clear</button>
            </div>

        </div>   
    </div>
  )
}

export default AddUser