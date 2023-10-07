import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Authentication from './Authentication';
import LoginSideImage from "./LoginPageUsedImg.svg";

export default function Login() {
  document.title = "Login [PlacementModule]";

  const  EntryWayMessage_SignUp= "Create a account"

  return (

    <>
    <div className=" grid grid-cols-[70%,30%] gap-0  place-content-center h-[100vh] p-[20rem] bg-gradient-to-r from-purple-700 via-pink-600 to-purple-400 ">
      
      <div>
        <img className='rounded-l-xl' src={LoginSideImage} alt="" />
      </div>
      
      <Authentication LinkButtonName={'SignUp'} Links={'/SignUp'} EntryWayMessage={EntryWayMessage_SignUp} />
      
    </div>
    
    
    </>
    

  )
}
