import NavBar  from "./Student/Components/NavBar";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import "./App.css"


export default function App() {
  return (
    <>
    
    <NavBar/>
    <Outlet/>
    
    </>
    
  );
}

