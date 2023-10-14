import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import landing_pM from "./blend_backImage.png";

// blend_backImage
export default function UserEntry() {
  document.title = "Placement Module ";

  return (
    <>
    <img className='bg-cover bg-center w-[100%]  fixed opacity-110  ' src={landing_pM} alt="bgImg" />

    <div className="  bg-gradient-to-r fixed flex items-center justify-center w-screen h-screen " >

        <div className=" grid justify-evenly gap-10 opacity-110  p-10 ">
              <h1 className='text-[7rem] text-white '>Placement Module</h1>

              <hr className=' mx-auto my-auto rounded-full w-[34rem]' />

              <div className=" flex  justify-center  gap-10 py-[2rem] ">
                    <Link to={'/SignUp'}> <button className=' bg-white  h-[6rem]  w-[18rem] shadow-lg text-[1.4rem]   p-2 px-14 font-light'>Sign Up</button></Link>
                  <Link to={'/Login'}> <button className=' bg-purple-000 border borde h-[6rem]  w-[18rem] shadow-2xl     text-[1.4rem]   p-2 px-14 font-light text-white'>Login</button></Link>
            </div>
        </div>
    </div>
    </>
  )
}
