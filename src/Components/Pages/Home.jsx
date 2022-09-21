import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { GrFormView } from 'react-icons/gr';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';

const Home = () => {
  const [users,setUsers]=useState([])

  useEffect(() => {
    loadUsers()
  }, [])

  const loadUsers=async()=>{
    const result =await axios.get('http://localhost:5000/users')
    //console.log(result.data)
    setUsers(result.data)
  }

  const deleteuser=async(id)=>{
    await axios.delete(`http://localhost:5000/users/${id}`)
    loadUsers()
  }
  
  return (
    <div className='container'>
        <div className='py-4'>
        <h1>Home</h1>
        <table className="table border shadow" >
          <thead className='table-dark'>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
           {
            users.map((user,i)=>(
              <tr key={user.id}>
                <td>{i+1}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link  className='btn btn-info'   to={`/users/${user.id}`}><GrFormView/></Link>
                  <Link className='btn btn-outline-success me-2 ms-2' to={`/users/edituser/${user.id}`}><BiEdit/></Link>
                  <Link className='btn btn-danger' onClick={()=>deleteuser(user.id)}><AiFillDelete/></Link>
                </td>
              </tr>
            ))
           }
          </tbody>
        </table>
        </div>
    </div>
  )
}

export default Home