import React from 'react'

export default function ToggleThem() {
    document.documentElement.classList.toggle("dark");
    const isDarkMode = document.documentElement.classList.contains("dark");

    if (isDarkMode) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.removeItem("theme");
    }

const storedTheme = localStorage.getItem("theme");

if (storedTheme === "dark") {
    document.documentElement.classList.add("dark");
}
  return (
   <>
                     <button>
                                {/* Dark mode button */}
                                <abbr title=" Change Mode">
                                        <label className="    ">
                                            <input  onClick={ToggleThem}type="checkbox" className="sr-only  peer " />
                                            <span className="peer dark:bg-green-300  cursor-pointer relative inline-block w-[3.2em] h-[1.8em] transition-all duration-300 ease-in-out bg-gray-300  rounded-full     before:absolute before:content-inside before:top-[0.25rem] before:left-[0.3rem] dark:before:left-[1.6rem] before:w-[1.3em] before:h-[1.3em] before:bg-white  before:rounded-full  before:transform before:transition-transform before:duration-300 before:ease-in-out  "></span>
                                        </label>  
                                </abbr>                          
                        </button>
   </>
  )
}

