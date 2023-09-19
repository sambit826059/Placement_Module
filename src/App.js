import Navbar  from "./Components/NavBar";
import React from "react";
import  Res from "./Components/Res"
import Apply from "./Components/Apply";
import  HeadBanner from "./Components/HeadBanner"


import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


export default function App() {
  return (
    <>
    
   

    <Router>
      <Navbar/>
           
      <Routes>
        
      <Route path="/Apply" element={<Apply/>} />
      <Route path="/Res" element={<Res/>} />

       
      </Routes>
    </Router>
      <HeadBanner/>
    
    </>
    
  );
}

