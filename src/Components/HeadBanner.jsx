import React from 'react'
import mountain from "./ImgORicon/mountain.avif";
import { Link } from 'react-router-dom';

export default function HeadBanner(props) {
  return (
    <>
    
    
    <div className="  px-1   ">

         <div className="relative ">
            <img
                className="object-cover w-full h-[40vw] sm:h-[20vw] md:h-[15vw] rounded-md"
                src={props.HeadBannerImage}
                alt="Your Image"
            />

            <button className="bg-gray-200 hover:bg-gray-700 text-gray-800 hover:text-white font-bold py-[0.61vw] px-[0.8vw] rounded absolute top-2 sm:top-4  left-5 mt-2 sm:mt-4 md:mt-6 ml-2 sm:ml-4 md:ml-6  ">
               <h6 className=' text-[2.5vw] sm:text-[1vw]'>
               <a href="/know">Know more</a>
                </h6> 
            </button>
        </div>

    </div>
    
    
    </>
  )
}
