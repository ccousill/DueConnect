import '../App.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    return (
        <div className="bg-gray-800">
            <div className="h-16 flex items-center space-x-4 pt-4 justify-center">
                
            <button onClick={() => navigate("/userList") }  className="rounded bg-slate-600 text-white px-6 py-2"> Users Page </button>
            <p className="text-white"> Due Connection </p>
            <button onClick={() => navigate("/") }  className="rounded bg-slate-600 text-white px-6 py-2"> Login Page </button>
            </div>

            {/* <div className="App"> <img src={logo} className="App-logo" alt="logo"/> </div> */}
        </div>
    );
}

export default Navbar;