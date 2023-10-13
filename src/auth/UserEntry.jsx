import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import landing_pM from "./landing_pM.jpg";


export default function UserEntry() {
  document.title = "Placement Module ";

  return (
    <>
        <img className='bg-cover bg-center  fixed opacity-75  ' src={landing_pM} alt="bgImg" />

    <div className="  left-[12rem] absolute top-0 h-[100vh] " >

        <div className="  p-10 px-14 ">
            <h1 className='text-[7rem]   '>Placement Module</h1>
        

            <div className=" flex gap-10 py-[5rem]  max-w-max   ">
                  <Link to={'/SignUp'}> <button className=' bg-white  h-[8rem]  w-[15rem] shadow-lg text-[1.4rem]   p-2 px-14'>Sign Up</button></Link>
                <Link to={'/Login'}> <button className=' bg-[#875DE1] h-[8rem]  w-[15rem]  text-[1.4rem]   p-2 px-14'>Login</button></Link>
          </div>
        </div>
    </div>
    </>
  )
}
