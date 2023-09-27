import NavBar  from "./Components/NavBar";
import React from "react";
import Apply from "./Components/Apply";
import  HeadBanner from "./Components/HeadBanner"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./Components/Home";
import "./App.css"
import UserEntry from "./Components/UserEntry";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";


export default function App() {
  return (
    <>
    
   

    <Router>      
      <Routes>
      {/* <Route path="/" element={<UserEntry/>} /> */}
      <Route path="/" element={<Home/>} />
          <Route path="/Apply" element={<Apply/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path='/SignUp' element={<SignUp/>} />
          <Route path='/Login' element={<Login/>} />
      </Routes>
    </Router>
    
    
    </>
    
  );
}

