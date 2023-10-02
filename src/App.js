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




// const router =createBrowserRouter([
  
//   //-------- Entry  Links----------
//   {
//     path: '/',
//     element: <UserEntry />
//   },
//   {
//     path: '/Login',
//     element:<Login />
//   },
//   {
//     path: '/SignUp',
//     element: <SignUp />
//   },
//   //------ student Links------
//   {
//     path: '/Student',
//     element: <StudentElement><StudentLandingLayout/></StudentElement>,
//     children: [
      
//       {
//         path: '', 
//         element: <Home />
//       },
//       {
//         path: 'Apply', 
//         element: <Apply />
//       }
//     ]
//   },
//     //-------HR Links-----
// {
//    path:'/HR',
//    element:<HrElement><div>This is Hr Accessible things </div></HrElement>,
// },

// // Admin Links
// {
//   path:'/Admin',
//   element:<AdminElement><div>Welcome </div></AdminElement>,
// }
      
// ])


export default function App() {

  // const [selectedUserType, setSelectedUserType] = useState('Not Selected');
  // const {selectedUserType}=useContext(ContextUserType);



  const [TypeOFuser, setTypeOFuser] = useState('Student'); 

  function StudentElement({ children }) {
    if (TypeOFuser === "Student") {
      return <>{children}</>;
    } else {
      return <div className="text-red-600 text-center text-[8rem]">Oops</div>;
    }
  }

  function HrElement({ children }) {
    if (TypeOFuser === "HR") {
      return <><h1>Welcome</h1></>;
    } else {
      return <div className="text-red-600 text-center text-[8rem]">Oops denied</div>;
    }
  }

  function AdminElement({ children }) {
    if (TypeOFuser === "Admin") {
      return <>{children}</>;
    } else {
      return <div className="text-red-600 text-center text-[8rem]">Denied</div>;
    }
  }

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
            <StudentElement>
              <StudentLandingLayout />
            </StudentElement>
          }
        >
          <Route path="" element={<Home />} />
          <Route path="Apply" element={<Apply />} />
        </Route>

        {/* HR Links */}
        <Route path="/HR" element={<HrElement />}>
          {/* HR-specific routes */}
        </Route>

        {/* Admin Links */}
        <Route path="/Admin" element={<AdminElement />}>
          {/* Admin-specific routes */}
        </Route>
      </Routes>

    </Router>

 

    </>
    
  );
}




