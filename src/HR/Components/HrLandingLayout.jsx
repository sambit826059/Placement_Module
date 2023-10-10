import React from 'react'
import Navbar from '../../Student/Components/NavBar'
import { Outlet } from 'react-router-dom'
import HrNavBar from './HrNavBar'
import Footer from '../../Student/Components/Footer'

export default function HrLandingLayout() {
  document.title = "HR -[Placement Module]";

  return (
    <>
    <div className="grid grid-cols-[14%,85%] gap-2 overflow-hidden px-4  ">    
      <HrNavBar/>
      <Outlet/>
    </div>
    </>
  )
}
