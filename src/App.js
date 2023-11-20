import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import "./App.css"
import Home from "./Student/Components/Home";
import Apply from "./Student/Components/Apply";
import UserEntry from "./auth/UserEntry";
import SignUp from "./auth/SignUp";
import Login from "./auth/Login";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import StudentLandingLayout from "./Student/Components/StudentLandingLayout";
import ContextUserType from "./Contexts/ContextUserType";
import Authentication from "./auth/Authentication";
import HrLandingLayout from "./HR/Components/HrLandingLayout";
import HrHome from "./HR/Components/HrHome";
import AdminLandingLayout from "./Admin/AdminLandingLayout";
import AdminHome from "./Admin/AdminHome";
import AuthUserType from "./auth/AuthUserType";
import JobPostingByHR from "./HR/Components/JobPostingByHR";
import ApplicantHR from "./HR/Components/ApplicantHR";
import StudentProfile from "./Student/Components/StudentProfile";
import JobPostingUpdate from "./HR/Components/JobPostUpdate";


export default function App() {
  return (
    <>
    <Router>
      <Routes>
        {/* Entry Links */}
        <Route path="/" element={<UserEntry />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />

        {/* Student Links */}
        <Route
          path="/Student"
          element={
            
              <StudentLandingLayout />
           
          }
        >
          <Route path="/Student/" element={<Home />} />
          <Route path="/Student/Home" element={<Home />} />
          <Route path="/Student/Apply" element={<Apply />} />
          <Route path="/Student/profile" element={<StudentProfile/>} />
          
        </Route>

        {/* HR Links */}
        <Route path="/HR" 
          element={
           
                <HrLandingLayout/>
           
          }
        >
          <Route path="/HR/" element={<HrHome />} />
          <Route path="/HR/home" element={<HrHome />} />
          <Route path="/HR/jobposting" element={<JobPostingByHR />} />
          <Route path="/HR/hr/jobpost/:id" element={<JobPostingUpdate/>} />
          <Route path="/HR/Applicants" element={<ApplicantHR/>} />
          
         
        </Route>

        {/* Admin Links */}
        <Route path="/Admin" 
          element={
            <AdminLandingLayout/>
          }
        >
           <Route path="" element={<AdminHome/>} />

          
        </Route>
      </Routes>
      
      

    </Router>

 

    </>
    
  );
}




