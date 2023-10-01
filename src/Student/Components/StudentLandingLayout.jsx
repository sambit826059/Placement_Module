import React from 'react'
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from 'react-router-dom';

export default function StudentLandingLayout() {
  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
