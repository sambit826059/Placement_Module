import React from 'react'
import Navbar from '../../Student/Components/NavBar'
import { Outlet } from 'react-router-dom'
import HrNavBar from './HrNavBar'
import Footer from '../../Student/Components/Footer'
import HrHeadder from './HrHeadder'

export default function HrLandingLayout() {
  document.title = "HR -[Placement Module]";

  return (
    <>
    <div className="">
      <div className="flex h-screen overflow-hidden">
        <HrNavBar/>
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <HrHeadder/>
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
   
    </>
  )
}






{/* <div className="grid grid-cols-[14%,85%] gap-0 overflow-hidden px-0  ">    
<Outlet/>
</div> */}