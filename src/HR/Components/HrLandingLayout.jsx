import React from 'react'
import Navbar from '../../Student/Components/NavBar'
import { Outlet } from 'react-router-dom'
import HrNavBar from './HrNavBar'
import Footer from '../../Student/Components/Footer'

export default function HrLandingLayout() {
  return (
    <>
    {/* <div className="flex "> */}
    <div class="grid grid-cols-[14%,86%] gap-4 mx-auto px-[2rem] py-8 ">    
      <HrNavBar/>
      <Outlet/>
    </div>
    </>
  )
}
