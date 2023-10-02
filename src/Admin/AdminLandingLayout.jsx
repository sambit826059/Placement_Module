import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Student/Components/NavBar'
import Footer from '../Student/Components/Footer'

export default function AdminLandingLayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}
