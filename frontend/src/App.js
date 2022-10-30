import './App.css';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers'
import Navbar from './components/Navbar';
import React from 'react';
import { BrowserRouter, Route , Routes} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter> 
            <Navbar/>
            <Routes> 
                <Route index element={<AllUsers/>} />
                <Route path="/" element={ <AllUsers/>} />
                <Route path="/userList" element={ <AllUsers/>} />
                <Route path="/addUser" element={ <AddUser/>} />
            </Routes>


        </BrowserRouter>
    );
}

export default App;