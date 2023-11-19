import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './AdminHeadder'
import Footer from '../Student/Components/Footer'
import AdminNav from './AdminNav'
import InappLoader from '../Loaders/InappLoader'

export default function AdminLandingLayout() {
   const [isLoading,setisLoading]=useState(false);
  
  
  useEffect(() => {
    setisLoading(true);
    setTimeout(()=>{
    setisLoading(false)
    },400)
}, [])

  return (
    <>
    {
      isLoading?
      <InappLoader/>
      :
      <>
    <div className="">
      <div className="flex h-screen overflow-hidden">
      <AdminNav/>
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Header/>
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
    
    </>

    }
    
    </>

  
  )
}
