import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <>
    <div className="p-10">
    Welcome
       <br />
       <label htmlFor="dropdown">User type:</label>
    <select id="dropdown" name="dropdown">
        <option value="option1">Student</option>
        <option value="option2">HR</option>
        <option value="option3">Admin</option>
    </select>

        <form action="/signup" method="post">
            <label for="">Username</label><br/>
            <input className='bg-gray-200' type='text' name='username'/>
            <br />
            <button type='submit'>submit</button>
        </form>
        <h6>already have a account </h6>
        <Link to={'/Login'}> <button className='p-4'>Login</button></Link>

    </div>
    
    </>
  )
}
