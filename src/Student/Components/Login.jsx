import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className='p-5'>
        Welcome back
        <br />
        <label htmlFor="dropdown">User type:</label>
    <select id="dropdown" name="dropdown">
        <option value="option1">Student</option>
        <option value="option2">HR</option>
        <option value="option3">Admin</option>
    </select>
        <h1>dont have any account </h1>
        <Link to={'/SignUp'}> <button className='bg-gray-200 p-4'>Sign Up</button></Link>

    </div>

  )
}
