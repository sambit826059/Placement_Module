import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default function SignUp() {
  document.title = "SignUp [PlacementModule]";

  return (


    <>
    <div className="grid place-content-center bg-green-200  h-[100vh]">

    <div className='p-12 py-[5rem] border-2 border-black rounded-xl bg-white '>
        Welcome
          <br />
          <label htmlFor="dropdown">User type:</label>
        <select id="dropdown" name="dropdown">
            <option value="option1">Student</option>
            <option value="option2">HR</option>
            <option value="option3">Admin</option>
        </select>

            <form action="/signup" method="post">
                <label htmlFor="">Username</label><br/>
                <input className='bg-gray-200' type='text' name='username'/>
                <br />
                <Link to={'/Student'}> <button className='bg-gray-200 p-4 mt-2'>Submit</button></Link>
            </form>
            <h6>already have a account </h6>
            <Link to={'/Login'}> <button className='p-4'>Login</button></Link>

        </div>
    </div>
    
    </>
  )
}
