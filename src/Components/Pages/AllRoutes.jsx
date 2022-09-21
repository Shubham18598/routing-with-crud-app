import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import NotFound from './NotFound'
import AddUser from '../Users/AddUser'
import EditUser from '../Users/EditUser'
import User from '../Users/User'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/users/adduser" element={<AddUser/>}/>
        <Route path="/users/edituser/:id" element={<EditUser/>}/>
        <Route path="/users/:id" element={<User/>}/>

        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes