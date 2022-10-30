import '../App.css';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserService from '../services/UserService.js';
import { data } from 'autoprefixer';

function Navbar() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [users,setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () =>{
            setLoading(true);
            try{
                const {data} = await UserService.getAllUsers();
                // var userList = []
                // for(let i = 0; i<response.data.length;i++){
                //     userList.push({id:data[i].id,firstName:data[i].firstName,lastName:data[i].lastName,email:data[i].email})
                // }
                // setUsers(userList);
                setUsers(data);
            }catch(error){
                console.log(error);
            }
            setLoading(false);
        }
        fetchData();
    }, []);


    return (
        <div className="container mx-auto my-8">
            <div className ="h-12">
                <button onClick={() => navigate("/addUser") }  className="rounded bg-slate-600 text-white px-6 py-2"> Add user</button>
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
                            <td className="text-left px-6 py-4 whitespace-nowrap"> 
                                <div className="text-sm text-gray-500">{user.firstName}</div> 
                            </td>
                            <td className="text-left px-6 py-4 whitespace-nowrap"> 
                                <div className="text-sm text-gray-500">{user.lastName}</div> 
                            </td>
                            <td className="text-left px-6 py-4 whitespace-nowrap"> 
                                <div className="text-sm text-gray-500">{user.email}</div> 
                            </td>
                            <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm"> 
                               <a href='#' className="text-indigo-600 hover:text-indigo-800 px-4"> Edit </a>
                               <a href="#" className="text-indigo-600 hover:text-indigo-800"> Delete </a>
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