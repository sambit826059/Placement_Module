import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


export default function UserEntry() {
  document.title = "Placement Module [EntyPoint]";

  return (
    <>
    <div className="p-9">
        <div className="">
            <h1 className='text-[7rem]'>Placement Module</h1>
        </div>

        <div className=" flex gap-4">
        <Link to={'/SignUp'}> <button className='bg-gray-200 p-4'>Sign Up</button></Link>
       <Link to={'/Login'}> <button className='p-4'>Login</button></Link>

        </div>
    </div>
    </>
  )
}
