import React, { useEffect, useState } from 'react'
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from 'react-router-dom';
import InappLoader from '../../Loaders/InappLoader';

export default function StudentLandingLayout() {

  
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
    
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
    }
    </>
   
  )
}
