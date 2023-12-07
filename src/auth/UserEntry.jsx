import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import landing_pM from "./blend_backImage.png";
import InappLoader from '../Loaders/InappLoader';
import ToggleThem from '../Theam/ToggleThem';



export default function UserEntry() {
  document.title = "Placement Module ";

  const [isLoading,setisLoading]=useState(false);
  
  
  useEffect(() => {
    setisLoading(true);
    setTimeout(()=>{
    setisLoading(false)
    },600)
}, [])

  return (
    <>
      {
        isLoading ?
        <>
        <InappLoader/>
        <ToggleThem/>
        </>

        :
        <div>
        <img className='bg-cover bg-center w-screen h-screen  fixed opacity-110   ' src={landing_pM} alt="bgImg" />

        <div className="  bg-gradient-to-r fixed flex items-center justify-center w-screen h-screen " >

            <div className="  grid justify-evenly gap-10 opacity-110  p-10 ">
                  <h1 className=' text-[3rem] sm:text-[7rem] text-white text-center '>Placement Module</h1>

                  <hr className='  border-t-2  mx-auto my-auto w-[75vw] sm:w-[34rem]' />

                  <div className=" flex flex-wrap justify-center  text-center gap-10 py-[2rem] ">
                        <Link to={'/SignUp'}> <button className=' bg-white hover:opacity-80  sm:h-[6rem]  sm:w-[18rem] shadow-lg text-[1.4rem]   p-2 px-14 font-light    '>Signup</button></Link>
                      <Link to={'/Login'}> <button className=' hover:bg-purple-500 border-2 hover:opacity-80 sm:h-[6rem]  sm:w-[18rem] shadow-2xl     text-[1.4rem]   p-2 px-14 font-light text-white'>Login</button></Link>
                </div>
            </div>
        </div>
        </div>

      }

      
     
    </>
  )
}





