import React, { useState } from 'react'

const AddUser = () => {
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    })

    const {name,username,email,phone,website}=user

    const onInputChange=(e)=>{
        //console.log(e.target.value)
        setUser({...user,[e.target.value]:e.target.value})
    }
    const onSubmit=(e)=>{
        e.preventDefault()
    }
  return (
    <div className='container'>
        <div className='w-75 mx-auto shadow p-5'>
            <h2>Add User</h2>
            <form onSubmit={e=>onSubmit(e)}>
                <div className='form-group'>
                    <input type="text"className='form-control form-control-lg' placeholder='Enter Your Name' name='name' value={name} onChange={e=>onInputChange(e)} />
                </div>
                <div className='form-group'>
                    <input type="text"className='form-control form-control-lg' placeholder='Enter Your Username' name='username' value={username} onChange={e=>onInputChange(e)}/>
                </div>
                <div className='form-group'>
                    <input type="text"className='form-control form-control-lg' placeholder='Enter Your Email' name='email' value={email} onChange={e=>onInputChange(e)}/>
                </div>
                <div className='form-group'>
                    <input type="text"className='form-control form-control-lg' placeholder='Enter Your Phone' name='phone' value={phone} onChange={e=>onInputChange(e)}/>
                </div>
                <div className='form-group'>
                    <input type="text"className='form-control form-control-lg' placeholder='Enter Your Website' name='website' value={website} onChange={e=>onInputChange(e)}/>
                </div>
                <button className='btn btn-primary btn-block'>Add User</button>
            </form>
        </div>
    </div>
  )
}

export default AddUser

//1hr 13 min