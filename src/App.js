import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Appointment from './Components/Appointment/Appoinment/Appointment';
import Login from './Components/Login/Login';
import Navbar from './Components/Shared/Navbar/Navbar';
import Register from './Components/Register/Register/Register';
export const UserContext= createContext();

function App() {
  const [loggedInUser,setLoggedInUser]=useState({});
  const loggedInEmail=window.sessionStorage.getItem("email");
  console.log(loggedInEmail,'Login')
  //const veri=window.localStorage.getItem("veri");

  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <h3>email:{loggedInEmail}</h3>
    <Router>  
    <Routes>
      <Route path="/" element={<><Navbar /><Home /></>}>
      </Route>
      <Route path="/login" element={<><Navbar /><Login /></>}>
      </Route>
      <Route path="/register" element={<Register />}>
      </Route>
    </Routes>
  </Router>
  </UserContext.Provider>
  );
}

export default App;
