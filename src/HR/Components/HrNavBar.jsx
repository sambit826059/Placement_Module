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
        <aside className='  absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-slate-700 duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0  '>
            
            <div className='flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5'>
                <NavLink>
                    <img src="" alt="" /> 
                </NavLink>
                <button  className="block lg:hidden">
                 
                </button>
            </div>


            <div className='flex flex-col overflow-y-auto duration-300 ease-linear'>
              <nav className='mt-5 py-4 px-4 lg:mt-9 lg:px-6'>
              <div>
                <h3 className="mb-4 ml-4 text-sm font-semibold ">Menu</h3>
                <ul className="mb-6 flex flex-col gap-1.5">
                    {/* nav links */}
                              <li> <NavLink  to="/HR/home" className={({isActive}) => ` ${ !isActive ? "  hover:bg-gray-300 " : " bg-green-300     hover:bg-green-200  "} group relative flex items-center gap-2.5 rounded-sm py-2 px-14 font-medium  duration-300 ease-in-out  dark:hover:bg-meta-4 `}> Dashbord</NavLink> </li>
                              <li > <NavLink to="/HR/jobposting" className={({isActive}) => ` ${ !isActive ? "  hover:bg-gray-300 " : " bg-green-300     hover:bg-green-200  "} group relative flex items-center gap-2.5 rounded-sm py-2 px-14 font-medium  duration-300 ease-in-out  dark:hover:bg-meta-4 `}> Job Posting </NavLink></li>
                                <li > <NavLink to="/HR/Applicants" className={({isActive}) => ` ${ !isActive ? "  hover:bg-gray-300 " : " bg-green-300     hover:bg-green-200  "} group relative flex items-center gap-2.5 rounded-sm py-2 px-14 font-medium  duration-300 ease-in-out  dark:hover:bg-meta-4  `}> Applicants </NavLink></li>
                                <li className='group relative flex items-center gap-2.5 rounded-sm py-2 px-14 font-medium  duration-300 ease-in-out  dark:hover:bg-meta-4'>
                                    <DropBoxLink LinkName={"Profile"}  Option_2={"Logout" }  />
                                </li>           
                </ul>
              </div>

              <div>
                <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
                   OTHERS
                </h3>

                <ul className="mb-6 flex flex-col gap-1.5">
                    <li className='group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-'>
                    Lorem
                    </li>

                    <li className='group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-'>
                    Lorem
                    </li>

                    <li className='group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-'>
                    Lorem
                    </li>
                </ul>
              </div>

              </nav>
            </div>
            
         
        </aside>
        </>
    );
}

export default HrNavBar;


{/* <div className="[sidenav]   fit-content h-[100vh] grid justify-evenly gap-[2rem] p-2  ">
               <div className=" bg-gray-200 rounded-xl p-1 py-10">
                    <div className="topToglleMenuButton before:absolute before:bg-black before:left-10"></div>
                        <div className="navElements py-1 px-2">
                            <ul className='grid justify-evenly gap-[1rem]'>
                                <NavLink  to="/HR/home" className={({isActive}) => ` ${ !isActive ? "  hover:bg-gray-300 " : " bg-green-300     hover:bg-green-200  "} hover:bg-green-200  px-10 py-1 max-sm:py-3  max-sm:text-2xl rounded `}> <li >Dashbord</li></NavLink> 
                                <NavLink to="/HR/jobposting" className={({isActive}) => ` ${ !isActive ? "  hover:bg-gray-300 " : " bg-green-300     hover:bg-green-200  "} hover:bg-green-200  px-10 py-1 max-sm:py-3  max-sm:text-2xl rounded  `}> <li >Job Posting </li></NavLink>
                                <NavLink to="/HR/Applicants" className={({isActive}) => ` ${ !isActive ? "  hover:bg-gray-300 " : " bg-green-300     hover:bg-green-200  "} hover:bg-green-200  px-10 py-1 max-sm:py-3  max-sm:text-2xl rounded  `}> <li >Applicants </li></NavLink>
                                <li className='flex gap-2  px-2 py-1 hover:bg-green-200 rounded group max-sm:text-2xl max-sm:py-3 justify-center'>
                                    <DropBoxLink LinkName={"Profile"}  Option_2={"Logout" }  />
                                </li>           
                            </ul>
                    </div>
                </div>
            </div> */}