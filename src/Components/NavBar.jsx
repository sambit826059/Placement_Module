// Navbar.js
import React from 'react';
import DroupDownButton from "./ImgORicon/NavBarDropDownBtn.svg";
import OpenMenu from "./ImgORicon/menuOpen.svg";
import DropBoxLink from './DropBoxLink';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Navbar() {
  return (
        <>
        
        <div className="  sticky top-0 z-10   w-[100%]  ">

            

        <div className="bg-gray-200  p-2 pr-4 md:p-2 sm:pr-12 md:pr-12   ">    
                    <div className="sm:hidden  grid justify-end  ">
                    <img className=' p-2  hover:bg-gray-300  rounded' src={OpenMenu} alt="menu-open" />
                </div>
                <div className=" left-0 top-[3.5rem]  max-sm:absolute  max-sm:bg-green-200  max-sm:w-[100%]   min-md:relative  min-md:bg-green-00">
                    <ul className=' grid  gap-2  sm:flex  sm:gap-4 sm:justify-end '>

                    <Link  to ="/"> <li className='hover:bg-gray-300 px-2 py-1 rounded md:text-center'>Home</li></Link> 


                        <li className='flex gap-2 hover:bg-gray-300 px-2 py-1 rounded group'>

                         <DropBoxLink LinkName={"Resource"}  Option_1={"Option1" }/>
                        </li>  

                        <Link to ="/apply"> <li className=' hover:bg-gray-300 px-2 py-1 rounded md:text-center '>Apply </li></Link>
                        
                        <li className='flex gap-2 hover:bg-gray-300 px-2 py-1 rounded group'>
                        <DropBoxLink LinkName={"Interview"} Option_1={"Option1" }/>
                        </li>

                        <li className='flex gap-2 hover:bg-gray-300 px-2 py-1 rounded group'>
                            <DropBoxLink LinkName={"Profile"} Option_1={"setting" }/>
                        </li>

                    </ul>
                </div>
            </div>  
        </div>
       
        </>
    );
}

export default Navbar;
