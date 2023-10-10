// Navbar.js
import React, { useState } from 'react'
import OpenMenu from "../Student/ImgORicon/menuOpen.svg";
import CloseMenu from "../Student/ImgORicon/closeMenu.svg";
import DropBoxLink from '../Student/Components/DropBoxLink';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
import { toBeDisabled } from '@testing-library/jest-dom/matchers';

function AdminNavbar() {

const [OpenNavMenu,setOpenNavMenu]=useState(false);

  return (
        <>
        
        <div className="  sticky top-0 z-10   w-[100%]  ">

            

        <div className="bg-gray-200  p-2 pr-4 md:p-2 sm:pr-12 md:pr-12   ">    

                    <div className="sm:hidden  grid justify-end  ">
                        <input type="checkbox" id='nav-toggle'  className="checkbox-sb group/check hidden"/>
                        <label htmlFor="nav-toggle" className={`label-sb  rounded ${OpenNavMenu ? 'hover:bg-red-200':'hover:bg-gray-300'}  `}>
                            <img onClick={()=>setOpenNavMenu(!OpenNavMenu)} className=' p-2   transition-all duration-00 ease-in cursor-pointer' src={ OpenNavMenu ? [CloseMenu] : [OpenMenu]}   alt="menu-open" />

                        </label>
                     
                    </div>
                
                    <div className={ ` top-[3.5rem]  max-sm:fixed   max-sm:bg-green-200    min-md:relative  min-md:bg-green-00    md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-2 max-sm:pl-0 transition-all duration-500 ease-in  ${OpenNavMenu ? 'top-15 max-sm:block ':'top-[-20rem] max-sm:hidden'}   `}>
                        
                        <ul className=' grid  gap-2  sm:flex max-sm:gap-0  sm:gap-4 sm:justify-end  '>

                            <NavLink  to="" className={({isActive}) => ` ${ !isActive ? "bg-gray-00  hover:bg-gray-300 " : "bg-gray-00  underline underline-offset-8  hover:bg-gray-300 "}   px-2 py-1 max-sm:py-3  max-sm:text-2xl rounded md:text-center `}> <li >Home</li></NavLink> 


                            <li className='flex gap-2 hover:bg-gray-300 px-2 py-1 rounded group max-sm:text-2xl max-sm:py-3  '>

                            <DropBoxLink LinkName={"Resource"}  Option_1={"Check" }/>
                            </li>  

                            <NavLink to="" className={({isActive}) => ` ${isActive ? "bg-gray-00 underline underline-offset-8 hover:bg-gray-300 " : "bg-gray-00   hover:bg-gray-300 "}   px-2 py-1 max-sm:py-3  max-sm:text-2xl rounded md:text-center `}> <li >Apply </li></NavLink>
                            
                            <li className='flex gap-2 hover:bg-gray-300 px-2 py-1 rounded group max-sm:text-2xl max-sm:py-3'>
                            <DropBoxLink LinkName={"Interview"} Option_1={"Check Update" }/>
                            </li>

                            <li className='flex gap-2 hover:bg-gray-300 px-2 py-1 rounded group max-sm:text-2xl max-sm:py-3'>
                                <DropBoxLink LinkName={"Profile"} Option_1={"setting" } Option_2={"Logout" }  />
                            </li>

                        </ul>

                    </div>


            </div>  
        </div>

        
       
        </>
    );
}

export default AdminNavbar;


