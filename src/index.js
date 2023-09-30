import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from "./Student/Components/Home";
import Apply from "./Student/Components/Apply";
import UserEntry from "./auth/UserEntry";
import SignUp from "./auth/SignUp";
import Login from "./auth/Login";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

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
    element: <StudentElement><App /></StudentElement>,
    children: [
      {
        index: true, 
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
   element:<HrElement><div>This is Hr Accessable things </div></HrElement>,
}

 
      
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


function StudentElement({children}){
  if(Current_User_Type === User_type.Student )
  return<>{children}</>;
  else{
    return <UserEntry/>
  }
}

function HrElement({children}){
  if(Current_User_Type === User_type.HR )
  return<>{children}</>;
  else{
    return <div>denied </div>
  }
}

//   <Router>      
//       <Routes>
//       <Route path="/" element={<UserEntry/>} />
//       <Route path="/" element={<Home/>} />
//           <Route path="/Apply" element={<Apply/>} />
//           <Route path="/Home" element={<Home/>} />
//           <Route path='/SignUp' element={<SignUp/>} />
//           <Route path='/Login' element={<Login/>} />
//       </Routes>
//     </Router>