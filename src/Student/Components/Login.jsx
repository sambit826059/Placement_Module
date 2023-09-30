import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default function Login() {
  document.title = "Login [PlacementModule]";

  return (

    <>
    <div className="grid place-content-center bg-orange-200 h-[100vh]">
    <div className='p-10 py-[5rem] border-2 border-black rounded-xl bg-white '>
        Welcome back
        <br />
        <label htmlFor="dropdown">User type:</label>
    <select id="dropdown" name="dropdown">
        <option value="option1">Student</option>
        <option value="option2">HR</option>
        <option value="option3">Admin</option>
    </select>
    <br />
    <label htmlFor="">Username</label><br/>
            <input className='bg-gray-200' type='text' name='username'/>

    <Link to={'/Student'}> <button className='bg-gray-200 p-4'>Submit</button></Link>

        <h1>dont have any account </h1>
        <Link to={'/SignUp'}> <button className='bg-gray-200 p-4'>Sign Up</button></Link>

    </div>

    </div>
    
    
    </>
    

  )
}
