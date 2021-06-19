import React from "react";
import { NavLink } from "react-router-dom";
import './navbar.css';
const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light'>
        <div className='container-fluid'>
          <NavLink className='navbar-brand text-white text-uppercase' to='/'>
            Humsaigii
          </NavLink>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav w-100 d-flex justify-content-end me-auto mb-2 mb-lg-0'>
              {/* <li className='nav-item'>
                <NavLink className='nav-link active text-white text-uppercase' aria-current='page' to='/'>
                  Home
                </NavLink>
              </li> */}
              {/* <li className='nav-item'>
                <NavLink className='nav-link text-white text-uppercase' to='/login'>
                  Login
                </NavLink>
              </li> */}
              {/* <li className='nav-item'>
                <NavLink className='nav-link text-white text-uppercase' to='/register'>
                  Register
                </NavLink>
              </li> */}
              <li className='nav-item portal_btn'>
                <NavLink className='nav-link text-white text-uppercase' to='/dashboard'>
                  Portal
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
