import React from 'react';
import '../styles/Nav.css';
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar navbar-expand-lg fixed-top transparent'>
      <div className='container-fluid d-flex justify-content-between'>
        <div>
        <Link to="/Donate">
          <a href='/' className='btn btn-outline-dark'>
            Donate
          </a></Link>
        </div>
        <div className='d-flex'>
          <div>
          
            <a href='#footer' className='nav-link pd-1'>
              ABOUT US
            </a>
          </div>
          <div>
            <a href='/' className='nav-link pd-1'>
              |
            </a>
          </div>
          <div>
            
            <a href='#footer' className='pd-1 nav-link'>
              CONTACTS
            </a>
          </div>
        </div>
        <div className='btn-group'>
          <Link to="/SignIn">
            <a href='/' className='btn btn-outline-dark'>
          Sign In
          </a></Link>
          <Link to="/SignUp">
          <a href='/' className='btn btn-outline-dark'>
            Sign Up
          </a></Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
