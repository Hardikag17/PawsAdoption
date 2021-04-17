import React from 'react';
import '../styles/Nav.css';

const Navbar = () => {
  return (
    <div className='navbar navbar-expand-lg fixed-top transparent'>
      <div className='container-fluid d-flex justify-content-between'>
        <div>
          <a href='/' className='btn btn-outline-dark'>
            Donate
          </a>
        </div>
        <div className='d-flex'>
          <div>
            <a href='/' className='nav-link pd-1'>
              ABOUT US
            </a>
          </div>
          <div>
            <a href='/' className='nav-link pd-1'>
              |
            </a>
          </div>
          <div>
            <a href='/' className='pd-1 nav-link'>
              CONTACTS
            </a>
          </div>
        </div>
        <div className='btn-group'>
          <a href='/' className='btn btn-outline-dark'>
            Sign In
          </a>
          <a href='/' className='btn btn-outline-dark'>
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
