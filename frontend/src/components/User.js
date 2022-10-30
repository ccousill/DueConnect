import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserService from '../services/UserService.js';

function User(){
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const params = useParams();


    useEffect(() => {
        
        const fetchData = async () =>{
            setLoading(true);
            try{
                const {data} = await UserService.getUser(params.id);
                console.log(data);
                setUser(data);
            }catch(error){
                console.log(error);
            }
            setLoading(false);
        }
        fetchData();
    }, [params.id]);


  return (
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
                     
                        <tr>
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
                    </tbody>)}

                </table>


            </div>
  )
}

export default User