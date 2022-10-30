import './App.css';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers'
import Navbar from './components/Navbar';
import User from './components/User';
import LoginPage from './components/LoginPage';
import React from 'react';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import UpdateUser from './components/UpdateUser';

function App() {
    return (
        <BrowserRouter> 
            <Navbar/>
            <Routes> 
                <Route index element={<LoginPage/>} />
                <Route path="/" element={ <LoginPage/>} />
                <Route path="/userList" element={ <AllUsers/>} />
                <Route path="/addUser" element={ <AddUser/>} />
                <Route path="/user/:id" element={ <User/>} />
                <Route path="/editUser/:id" element= {<UpdateUser/>} />
            </Routes>


        </BrowserRouter>
    );
}

export default App;