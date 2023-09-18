// Navbar.js
import React from 'react';
import './Navbar.css'
import DroupDownButton from "./ImgORicon/NavBarDropDownBtn.svg";
import OpenMenu from "./ImgORicon/menuOpen.svg";
import DropBoxLink from './DropBoxLink';

function Navbar() {
  return (
        <>
        <div className="  sticky top-0 z-10   w-[100%] ">

            

        <div className="bg-gray-200 p-2 pr-4 md:p-2 lg:pr-12">    
                    <div className="sm:hidden  grid justify-end ">
                    <img className=' p-2  hover:bg-gray-300  rounded' src={OpenMenu} alt="menu-open" />
                </div>
                <div className=" ">
                    <ul className=' flex gap-4 justify-end max-sm:hidden'>

                        <li className='flex gap-2 hover:bg-gray-300 px-2 py-1 rounded group'>
                        <DropBoxLink LinkName={"Resource"}  Option_1={"Option1" }/>
                        </li>  

                        <li className=' hover:bg-gray-300 px-2 py-1 rounded text-center '><a href="#">Apply</a> </li>
                        
                        <li className='flex gap-2 hover:bg-gray-300 px-2 py-1 rounded group'>
                        <DropBoxLink LinkName={"Interview"} Option_1={"Option1" }/>
                        </li>

                        <li className='flex gap-2 hover:bg-gray-300 px-2 py-1 rounded group'>
                            <DropBoxLink LinkName={"Profile"} Option_1={"Option1" }/>
                        </li>

                    </ul>
                </div>
            </div>  
        </div>
        <div className=" hidden flex  justify-end">
        <div className="MobileNavlinks">
                    <ul className='bg-gray-100 p-10 grid gap-2'>
                    <a href="#">  <li className='flex gap-1 '>Resource  <img src={DroupDownButton} alt="DroupDown" /></li></a>  
                    <a href="#"><li >Apply</li></a> 
                    <a href="#"><li className='flex gap-1'>Interview <img src={DroupDownButton} alt="DroupDown" /></li></a> 
                    <a href="#"><li className='flex gap-1'>Profile <img src={DroupDownButton} alt="DroupDown" /></li></a> 
                    </ul>
                </div>

        </div>
      


        </>
    );
}

export default Navbar;
