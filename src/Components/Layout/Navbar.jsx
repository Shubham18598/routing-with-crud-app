import React from 'react'
import {  Link, NavLink } from 'react-router-dom'
import { MdOutlinePersonAdd } from 'react-icons/md';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" >
  <div className="container-fluid" >
    <NavLink className="navbar-brand" to="/">React Users</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-NavLink " aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-NavLink" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-NavLink" to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
    <Link className='btn btn-outline-light me-4'  to='/users/adduser'><MdOutlinePersonAdd/></Link>
  </div>
  
</nav>
  )
}

export default Navbar