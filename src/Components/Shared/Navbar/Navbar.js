import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
const Navbar = () => {
  const[loggedInUser,setLoggedInUser]=useContext(UserContext)
  
  return (
    
     <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link mr-5" href="/">Home <span className="sr-only">(current)</span></a>
      </li>

      <li className="nav-item">
        <a className="nav-link mr-5" href="/login">Login</a>
      </li>
      <li className="nav-item">
        <p>Email2:{loggedInUser.email}</p>
      </li>
    </ul>
  </div>
</nav>
     </div>


  );
};

export default Navbar;