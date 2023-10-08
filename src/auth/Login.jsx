import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Authentication from './Authentication';
import LoginSideImage from "./LoginPageUsedImg.svg";

export default function Login() {
  document.title = "Login [PlacementModule]";

  const  EntryWayMessage_SignUp= "Create a account"

  return (

    <>
    <div className=" grid    place-content-center h-[100vh] p-[20rem] bg-gradient-to-r from-purple-700 via-pink-600 to-purple-400 ">
      
      <div className=' grid rounded  bg-white grid-cols-[70%,30%] gap-0 shadow-lg shadow-black-500/50'>
        <img className='rounded' src={LoginSideImage} alt="" />
        <Authentication LinkButtonName={'SignUp'} Links={'/SignUp'} EntryWayMessage={EntryWayMessage_SignUp} />

      </div>
      
      
    </div>
    
    
    </>
    

  )
}
