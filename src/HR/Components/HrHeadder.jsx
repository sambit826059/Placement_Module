import React, { useState } from 'react'
import SearchIcon from "../HrImgORicon/SearchIconHrDash.svg";
import DropBoxLink from '../../Student/Components/DropBoxLink';
import DropBoxOpen from "../HrImgORicon/NavBarDropDownBtn.svg";

export default function HrHeadder() {

   function ToggleThem() {
    document.documentElement.classList.toggle("dark");
    const isDarkMode = document.documentElement.classList.contains("dark");

    if (isDarkMode) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.removeItem("theme");
    }
}
const storedTheme = localStorage.getItem("theme");

if (storedTheme === "dark") {
    document.documentElement.classList.add("dark");
}



  return (
    <>
        <header className={`sticky top-0 z-40 flex w-full  dark:bg-slate-700 drop-shadow-md drop-shadow-gray-100 border-b border-slate-300  `}>
             <div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
                <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
                    <button className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm   lg:hidden">
                        =
                    </button>
                    <img src="" alt="" />
                </div>

                <div className="hidden sm:block">
                    <form action="" method="">
                        <div className="relative">
                            <button className=" group absolute top-1/2 left-0 -translate-y-1/2 hover:bg-gray-200 p-2 rounded-full">
                                {/* search icon svg */}
                                <svg  className='fill-slate-600 group-hover:fill-blue-400' width="21" height="21" viewBox="0 0 21 21"  xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.031 14.6168L20.3137 18.8995L18.8995 20.3137L14.6168 16.031C13.0769 17.263 11.124 18 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18 11.124 17.263 13.0769 16.031 14.6168ZM14.0247 13.8748C15.2475 12.6146 16 10.8956 16 9C16 5.1325 12.8675 2 9 2C5.1325 2 2 5.1325 2 9C2 12.8675 5.1325 16 9 16C10.8956 16 12.6146 15.2475 13.8748 14.0247L14.0247 13.8748Z" />
                                </svg>
                            </button>

                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full bg-transparent pr-4 pl-10 focus:outline-none"
                            />
                        </div>
                    </form>
                </div>

                <div className="flex items-center gap-3 2xsm:gap-7">
                    <ul className="flex items-center gap-4 2xsm:gap-4">
                      <li>
                      <button>
                                {/* Dark mode button */}
                                <abbr title=" Change Mode">
                                        <label className="    ">
                                            <input  onClick={ToggleThem}type="checkbox" className="sr-only  peer " />
                                            <span className="peer dark:bg-green-300  cursor-pointer relative inline-block w-[3.2em] h-[1.8em] transition-all duration-300 ease-in-out bg-gray-300  rounded-full     before:absolute before:content-inside before:top-[0.25rem] before:left-[0.3rem] dark:before:left-[1.6rem] before:w-[1.3em] before:h-[1.3em] before:bg-white  before:rounded-full  before:transform before:transition-transform before:duration-300 before:ease-in-out  "></span>
                                        </label>  
                                </abbr>                          
                        </button>
                     </li>
                        <li className='grid justify-items-stretch gap-0'>
                            <div className='text-[1rem] justify-self-end dark:text-white'>Soumen</div>
                            <div className='text-gray-500 font-light text-[0.8rem] justify-self-start dark:text-green-300 '>Company name</div>
                        </li>
                        <li className='flex gap-2 dark:hover:bg-slate-600 hover:bg-gray-300 px-2 py-1 rounded group max-sm:text-2xl max-sm:py-3'>
                                <DropBoxLink ProfileImg={'https://picsum.photos/id/200/200/300'} Option_1={"setting" } Option_2={"Logout" }  option2_link={"/login" } />
                            </li>
                    </ul>
                </div>
             </div>
        </header>
    </>
  )
}
