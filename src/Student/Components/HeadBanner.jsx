import React from 'react'
import mountain from "./ImgORicon/mountain.avif";

export default function HeadBanner(props) {
  return (
    <>
    
    
    <div className="  md: pt-4 pl-1  ">

         <div className="relative ">
            <img
                className="object-cover w-full h-[52vw]  md:h-[35vh] rounded-md"
                src={props.HeadBannerImage}
                alt="Your Image"
            />


            <button className={` rounded-full font-bold py-[1.7vh] px-[8vh] absolute  ${props.HeadBannerButtonStyle}`}>
               {/* bg-gray-300 bg-opacity-50  hover:bg-gray-700 text-black  hover:text-white top-10 sm:top-40 left-5 sm:left-20 mt-2 sm:mt-4 md:mt-6 ml-2 sm:ml-4 md:ml-6  */}
               <h6 className='  md:text-[2vh]'>
               <a href="/know" className='text-[1.1rem]'>{props.HeadBannerButtonName}</a>
                </h6> 
            </button>
            <h2 className='absolute top-2 sm:top-20 text-2xl   sm: left-44 text-white sm:w-[36vw]'>{props.HeadLineForHeadBAnner}</h2>

        </div>
    </div>
    
    </>
  )
}
