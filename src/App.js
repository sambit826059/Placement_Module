import NavBar  from "./Components/NavBar";
import React from "react";
import Apply from "./Components/Apply";
import  HeadBanner from "./Components/HeadBanner"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./Components/Home";
import "./App.css"

export default function App() {
  return (
    <>
    
   

    <Router>
    <NavBar/>
           
      <Routes>
        
      <Route path="/Apply" element={<Apply/>} />
      <Route path="/" element={<Home/>} />
       
      </Routes>
    </Router>
    
    
    </>
    
  );
}

