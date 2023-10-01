import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Authentication from './Authentication';

export default function Login() {
  document.title = "Login [PlacementModule]";

  const  EntryWayMessage_SignUp= "Create a account"

  return (

    <>
    <div className="grid place-content-center bg-orange-200 h-[100vh]">
    <Authentication LinkButtonName={'SignUp'} Links={'/SignUp'} EntryWayMessage={EntryWayMessage_SignUp} />

    </div>
    
    
    </>
    

  )
}


{/* <div className='p-10 py-[5rem] border-2 border-black rounded-xl bg-white '>
        Welcome back
        <br />
        <label htmlFor="dropdown">User type:</label>
    <select id="dropdown" name="dropdown" onChange={handleDropdownChange}>
        <option value="option0">Not Selected</option>
        <option value="option1">Student</option>
        <option value="option2">HR</option>
        <option value="option3">Admin</option>
    </select>
    <br />
    { selectedUserType && <h1 className='text-green-400'>hello {selectedUserType}</h1> }
            <label htmlFor="">Username</label><br/>
            <input className='bg-gray-200' type='text' name='username'/><br /><br />
            <input className='bg-gray-200' type='password' name='password'/>
                <br />
                <label htmlFor="">Password</label><br/>

    <Link to={'/Student'}> <button type='submit' className='bg-gray-200 p-4'>Submit</button></Link>

        <h1>dont have any account </h1>
        <Link to={'/SignUp'}> <button className=''>Sign Up</button></Link>

    </div> */}