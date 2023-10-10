import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


export default function UserEntry() {
  document.title = "Placement Module ";

  return (
    <>
    <div className="  h-[100vh] ">
        <div className="  p-10 px-14 ">
            <h1 className='text-[7rem] text-[#FF6D5C]'>Placement Module</h1>
        

        <div className=" flex gap-6  max-w-max   ">
        <Link to={'/SignUp'}> <button className='bg-[#875DE1] shadow-lg shadow-purple-500/40 text-[1.4rem] text-white rounded-full  p-2 px-14'>Sign Up</button></Link>
       <Link to={'/Login'}> <button className='  text-[#F26857] hover:bg-[#F26857] text-[1.4rem] hover:text-white border-2 border-[#F26857] rounded-full  p-2 px-14'>Login</button></Link>
       </div>
        </div>
    </div>
    </>
  )
}
