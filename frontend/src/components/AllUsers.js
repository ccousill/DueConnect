import '../App.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../services/UserService.js';
import AddUser from './AddUser';

function Navbar() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [users,setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () =>{
            setLoading(true);
            try{
                const {data} = await UserService.getAllUsers();
                setUsers(data);
            }catch(error){
                console.log(error);
            }
            setLoading(false);
        }
        fetchData();
    }, []);

    const deleteUser = (e,userId) =>{
        e.preventDefault();
        console.log(userId)
        UserService.deleteUser(userId).then((response) =>{
            if(users) {
                setUsers((prevElement) =>{
                    return prevElement.filter((user) => user.id !== userId);
                })
            }
            console.log(response);
        }).catch((error)=>{
            console.log(error)
        })
    }

    const updateUser = (e,id) =>{
        e.preventDefault();
        navigate(`/editUser/${id}`)
    }

    return (
        <div className="container mx-auto my-8">
            <div className ="h-12">
                {/* <button onClick={() => navigate("/addUser") }  className="rounded bg-slate-600 text-white px-6 py-2"> Add user</button> */}
                <AddUser/>
            </div> 
            <div className="flec shadow border-b">
                <table className="min-w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="text-left font-medium text-gray-500 py-3 px-6"> First Name </th>
                            <th className="text-left font-medium text-gray-500 py-3 px-6"> Last name </th>
                            <th className="text-left font-medium text-gray-500 py-3 px-6"> Email </th>
                            <th className="text-right font-medium text-gray-500 py-3 px-6"> Actions </th>
                        </tr>
                    </thead>

                    {!loading && (
                    <tbody className="big-white">
                        {users.map((user) => (
                        <tr key={user.id}>
                            <td onClick = {() => navigate(`/user/${user.id}`) } className="text-left px-6 py-4 whitespace-nowrap cursor-pointer hover:bg-slate-200"> 
                                <div className="text-sm text-gray-500">{user.firstName}</div> 
                            </td>
                            <td className="text-left px-6 py-4 whitespace-nowrap"> 
                                <div className="text-sm text-gray-500">{user.lastName}</div> 
                            </td>
                            <td className="text-left px-6 py-4 whitespace-nowrap"> 
                                <div className="text-sm text-gray-500">{user.email}</div> 
                            </td>
                            <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm"> 
                               <a onClick={(e) => updateUser(e,user.id)} className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer"> Edit </a>
                               <a href="#" onClick={(e) => deleteUser(e,user.id)} className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer"> Delete </a>
                            </td>
                        </tr>
                        ))}
                    </tbody>)}

                </table>


            </div>
        </div>
    );
}

export default Navbar;