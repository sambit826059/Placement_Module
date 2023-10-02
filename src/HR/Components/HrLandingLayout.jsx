import React from 'react'
import Navbar from '../../Student/Components/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../../Student/Components/Footer'

export default function HrLandingLayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}
