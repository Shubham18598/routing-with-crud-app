import React from 'react'
import {  Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" >
  <div className="container-fluid" >
    <NavLink className="navbar-brand" to="/">React Userr</NavLink>
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
    <Link className='btn btn-outline-light' to='/users/adduser'>Add user</Link>
  </div>
  
</nav>
  )
}

export default Navbar