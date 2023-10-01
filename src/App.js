import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';
import "./App.css"
import Home from "./Student/Components/Home";
import Apply from "./Student/Components/Apply";
import UserEntry from "./auth/UserEntry";
import SignUp from "./auth/SignUp";
import Login from "./auth/Login";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import StudentLandingLayout from "./Student/Components/StudentLandingLayout";

const User_type={
  Student:'Student',
  HR:'HR',
  Admin:'Admin'
}
const Current_User_Type=User_type.Student

const router =createBrowserRouter([
  
  // Entry  Links
  {
    path: '/',
    element: <UserEntry />
  },
  {
    path: '/Login',
    element:<Login />
  },
  {
    path: '/SignUp',
    element: <SignUp />
  },
  // student Links
  {
    path: '/Student',
    element: <StudentElement><StudentLandingLayout/></StudentElement>,
    children: [
      
      {
        path: '', 
        element: <Home />
      },
      {
        path: 'Apply', 
        element: <Apply />
      }
    ]
  },
    // HR Links
{
   path:'/HR',
   element:<HrElement><div>This is Hr Accessible things </div></HrElement>,
},

// Admin Links
{
  path:'/Admin',
  element:<AdminElement><div>Welcome </div></AdminElement>,
}
      
])


export default function App() {
  return (
    <>
       <RouterProvider router={router} />
    
    
    </>
    
  );
}


function StudentElement({children}){
  if(Current_User_Type === User_type.Student )
  return<>{children}</>;
  else{
    return <div>OOps</div>
  }
}

function HrElement({children}){
  if(Current_User_Type === User_type.HR )
  return<>{children}</>;
  else{
    return <div>Oops denied </div>
  }
}

function AdminElement ({children}){
  if(Current_User_Type === User_type.Admin )
  return<>{children}</>;
  else{
    return <div>denied </div>
  }

}

