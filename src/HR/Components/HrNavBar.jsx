// Navbar.js
import React, { useState } from 'react'
import OpenMenu from "../../Student/ImgORicon/menuOpen.svg";
import CloseMenu from "../../Student/ImgORicon/closeMenu.svg";
import DropBoxLink from '../../Student/Components/DropBoxLink';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
import { toBeDisabled } from '@testing-library/jest-dom/matchers';

function HrNavBar() {

const [OpenNavMenu,setOpenNavMenu]=useState(false);

  return (
        <>
        <div className='bg-gray-300 py-10 rounded-md h-[42vw]'>

                    <div className={ `  `}>
                        
                        <ul className=' grid  gap-2 p-4     '>

                            <NavLink  to="/HR/home" className={({isActive}) => ` ${ !isActive ? "  hover:bg-gray-300 " : " bg-green-300     hover:bg-green-200  "} hover:bg-green-200  px-2 py-1 max-sm:py-3  max-sm:text-2xl rounded  `}> <li >Dashbord</li></NavLink> 

                            <NavLink to="/HR/jobposting" className={({isActive}) => ` ${ !isActive ? "  hover:bg-gray-300 " : " bg-green-300     hover:bg-green-200  "} hover:bg-green-200  px-2 py-1 max-sm:py-3  max-sm:text-2xl rounded  `}> <li >Job Posting </li></NavLink>
                            <NavLink to="/HR/Applicants" className={({isActive}) => ` ${ !isActive ? "  hover:bg-gray-300 " : " bg-green-300     hover:bg-green-200  "} hover:bg-green-200  px-2 py-1 max-sm:py-3  max-sm:text-2xl rounded  `}> <li >Applicants </li></NavLink>
                            
                            <li className='flex gap-2  px-2 py-1 hover:bg-green-200 rounded group max-sm:text-2xl max-sm:py-3'>
                                <DropBoxLink LinkName={"Profile"}  Option_2={"Logout" }  />
                            </li>

                        </ul>

                    </div>
        
         
        </div>
        </>
    );
}

export default HrNavBar;


