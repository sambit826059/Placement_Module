import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavBar from './AdminNavBar'
import Footer from '../Student/Components/Footer'

export default function AdminLandingLayout() {
  return (
    <>
    <AdminNavBar/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}
