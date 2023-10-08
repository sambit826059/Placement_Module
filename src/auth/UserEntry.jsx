import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


export default function UserEntry() {
  document.title = "Placement Module ";

  return (
    <>
    <div className=" bg-gray-900 h-[100vh] bg-gradient-to-r from-purple-700 via-pink-600 to-purple-400">
        <div className="  p-10  ">
            <h1 className='text-[7rem] text-white'>Placement Module</h1>
        

        <div className=" flex gap-0  max-w-max   ">
        <Link to={'/SignUp'}> <button className='bg-gray-200 p-3 px-6 '>Sign Up</button></Link>
       <Link to={'/Login'}> <button className=' p-3 px-6 text-gray-100 hover:bg-gray-700 '>Login</button></Link>
       </div>
        </div>
    </div>
    </>
  )
}
