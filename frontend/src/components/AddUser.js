import React, {Fragment, useState} from 'react'
import '../App.css';
import UserService from '../services/UserService.js';
import { useNavigate } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import AllUsers from './AllUsers';
function AddUser(){
    const navigate = useNavigate();
    const [isOpen,setIsOpen] = useState(false);

    function closeModal(){
        setIsOpen(false);
    }
    function openModal(){
        setIsOpen(true);
    }

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
            setUser({id:"",firstName:"",lastName:"",email:""});
            closeModal();
            window.location.reload(false);
        }).catch((error)=>{
            console.log(error)
        })
    }

    const clearForm = (e) =>{
        e.preventDefault();
        setUser({id:"",firstName:"",lastName:"",email:""});
    }

  return (
    <>
    <button onClick={openModal} className="rounded text-white font-semibold bg-blue-400 py-2 px-2 hover:bg-blue-800">Add user</button>
     <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
            <div className="min-h-screen px4 text-center">
                <Transition.Child 
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"> 
                    <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
                        <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900"> Add new User </Dialog.Title>
                        <div className="flex max-w-md max-auto">
                            <div className="py-2">
                                <div className="h-14 my-4">
                                    <label className="block text-gray-600 text-sm font-normal">
                                        First Name: 
                                    </label>
                                        <input 
                                        type="text" 
                                        name="firstName"
                                        value={user.firstName}
                                        onChange={(e) => handleChange(e)}
                                        className="h-10 w-96 border mt-2 px-2 py-2">
                                        </input> 
                                </div>
                                <div className="h-14 my-4">
                                    <label className="block text-gray-600 text-sm font-normal">
                                        Last Name: 
                                    </label>
                                        <input 
                                        type="text" 
                                        name="lastName"
                                        value={user.lastName}
                                        onChange={(e) => handleChange(e)}
                                        className="h-10 w-96 border mt-2 px-2 py-2">
                                        </input> 
                                </div>
                                <div className="h-14 my-4">
                                    <label className="block text-gray-600 text-sm font-normal">
                                        Email: 
                                    </label>
                                        <input 
                                        type="text" 
                                        name="email"
                                        value={user.email}
                                        onChange={(e) => handleChange(e)}
                                        className="h-10 w-96 border mt-2 px-2 py-2">
                                        </input> 
                                </div>
                                <div className="item-center justify-center h-14 w-full my-4 space-x-4 pt-4"> 
                                     <button onClick={saveUser} className="rounded text-white font-semibold bg-green-400 py-2 px-2 hover:bg-green-800">Save</button>
                                     <button onClick={clearForm} className="rounded text-white font-semibold bg-blue-400 py-2 px-2 hover:bg-blue-800">Clear</button>
                                     <button onClick={closeModal} className="rounded text-white font-semibold bg-red-400 py-2 px-2 hover:bg-red-800 float-right">Close</button> 
                                </div>
                            </div>
                        </div>
                    </div>
                
                </Transition.Child>

            </div>

        </Dialog>
        </Transition> 
    </>
  )
}

export default AddUser