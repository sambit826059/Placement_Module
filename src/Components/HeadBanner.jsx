import React from 'react'
import mountain from "./ImgORicon/mountain.avif";
import { Link } from 'react-router-dom';

export default function HeadBanner(props) {
  return (
    <>
    
    
    <div className="  md: pt-4   ">

         <div className="relative ">
            <img
                className="object-cover w-full h-[52vw]  md:h-[35vh] rounded-md"
                src={props.HeadBannerImage}
                alt="Your Image"
            />

            <button className="bg-gray-200 hover:bg-gray-700 text-gray-800 hover:text-white font-bold py-[1.4vh] px-[2vh] rounded absolute top-2 sm:top-4  left-5 mt-2 sm:mt-4 md:mt-6 ml-2 sm:ml-4 md:ml-6  ">
               <h6 className='  md:text-[2vh]'>
               <a href="/know">Know more</a>
                </h6> 
            </button>
        </div>

    </div>
    
    </>
  )
}
