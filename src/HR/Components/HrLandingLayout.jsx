import React from 'react'
import Navbar from '../../Student/Components/NavBar'
import { Outlet } from 'react-router-dom'
import HrNavBar from './HrNavBar'
import Footer from '../../Student/Components/Footer'

export default function HrLandingLayout() {
  return (
    <>
    {/* <div className="flex "> */}
    <div class="grid grid-cols-[20%,78%] gap-4  md:w-70rem mx-auto  p-4">    
      <HrNavBar/>
      <Outlet/>
    </div>
    
    
    </>
  )
}
