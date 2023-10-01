import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Authentication from './Authentication';

export default function SignUp() {
  document.title = "SignUp [PlacementModule]";


  

  return (


    <>
    <div className="grid place-content-center bg-green-200  h-[100vh]">
   <Authentication LinkButtonName={'Login'} Links={'/Login'} />
    </div>
    
    </>
  )
}
