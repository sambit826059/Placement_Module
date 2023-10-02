import React, { useState } from "react";
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


const User_type={
  NormalUser:'Not Selected',
  Student:'Student',
  HR:'HR',
  Admin:'Admin'
}
const Current_User_Type=User_type.Student

const router =createBrowserRouter([
  
  //-------- Entry  Links----------
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
  //------ student Links------
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
    //-------HR Links-----
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
  // const [selectedUserType, setSelectedUserType] = useState('')

  const [TypeOFuser, setTypeOFuser] = useState(User_type)

  return (
    <>
       <RouterProvider router={router} />
       {/* <ContextUserType.Provider value={{selectedUserType, setSelectedUserType}}> */}
       {/* <Authentication/> */}
       {/* </ContextUserType.Provider> */}

    </>
    
  );
}


function StudentElement({children}){
  if(Current_User_Type === User_type.Student )
  return<>{children}</>;
  else{
    return <div className="text-red-600 text-center text-[8rem]">OOps</div>
  }
}

function HrElement({children}){
  if(Current_User_Type === User_type.HR )
  return<>{children}</>;
  else{
    return <div className="text-red-600 text-center text-[8rem]">Oops denied </div>
  }
}

function AdminElement ({children}){
  if(Current_User_Type === User_type.Admin )
  return<>{children}</>;
  else{
    return <div className="text-red-600 text-center text-[8rem] ">denied </div>
  }

}

