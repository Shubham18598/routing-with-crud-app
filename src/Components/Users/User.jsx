import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const User = () => {
    const [user, setUser]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:"",
    })
    const{id}=useParams()

    const loadUser=async()=>{
        const res =await axios.get(`http://localhost:5000/users/${id}`)
        //console.log(result.data)
        setUser(res.data)
      }
      useEffect(()=>{
        loadUser()
      },[])

  return (
    <div className='container py-4'>
        <Link className="btn btn-primary" to="/">Back to Home</Link>
        <h1 className='display-4'>User Id: {id}</h1>
        <hr />

        <ul className='list-group w-auto'>
            <h4 className='list-group-item'>Name : {user.name}</h4>
            <h4 className='list-group-item'>Username : {user.username}</h4>
            <h4 className='list-group-item'>Email : {user.email}</h4>
            <h4 className='list-group-item'>Phone : {user.phone}</h4>
            <h4 className='list-group-item'>Website : {user.website}</h4>
            {/* <h4 className='list-group-item'>Company Name : {user.company.name}</h4>
            <h4 className='list-group-item'>City : {user.address.city}</h4> */}
        </ul>
    </div>
  )
}

export default User