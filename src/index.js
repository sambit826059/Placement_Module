import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from "./Student/Components/Home";
import Apply from "./Student/Components/Apply";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router =createBrowserRouter([
  {
    path: '/',
    element:<App/>,

    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"/Apply",
        element:<Apply/>
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



// <Router>      
//       <Routes>
//       <Route path="/" element={<UserEntry/>} />
//       <Route path="/" element={<Home/>} />
//           <Route path="/Apply" element={<Apply/>} />
//           <Route path="/Home" element={<Home/>} />
//           <Route path='/SignUp' element={<SignUp/>} />
//           <Route path='/Login' element={<Login/>} />
//       </Routes>
//     </Router>