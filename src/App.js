import NavBar  from "./Components/NavBar";
import React from "react";
import Apply from "./Components/Apply";
import  HeadBanner from "./Components/HeadBanner"
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import Home from "./Components/Home";
import "./App.css"
import UserEntry from "./Components/UserEntry";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";


export default function App() {
  return (
    <>
    
    <NavBar/>
    <Outlet/>
    
    </>
    
  );
}

