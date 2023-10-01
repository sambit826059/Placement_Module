import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Authentication from './Authentication';

export default function SignUp() {
  document.title = "New User..! [PlacementModule]";

  const  EntryWayMessage_login="Already have a account";
  return (
    <>
    <div className="grid place-content-center bg-green-200  h-[100vh]">
    <Authentication LinkButtonName={'Login'} Links={'/Login'} SignUpformUse={true} EntryWayMessage={EntryWayMessage_login} />

    </div>
    
    </>
  )
}
