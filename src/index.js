import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from "./Student/Components/Home";
import Apply from "./Student/Components/Apply";
import UserEntry from "./Student/Components/UserEntry";
import SignUp from "./Student/Components/SignUp";
import Login from "./Student/Components/Login";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router =createBrowserRouter([

  {
    path: '/',
    element: <UserEntry />
  },
  {
    path: '/Login',
    element: <Login />
  },
  {
    path: '/SignUp',
    element: <SignUp />
  },
  {
    path: '/Student',
    element: <App />,
    children: [
      {
        index: true, // This makes it the default route for the Student_Landing parent
        element: <Home />
      },
      {
        path: 'Apply', // Notice that you don't repeat the parent path here
        element: <Apply />
      }
    ]
  }

 
      
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



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