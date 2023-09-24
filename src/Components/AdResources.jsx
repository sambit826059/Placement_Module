import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AdResources() {

    const settings = {
        dots: false, 
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
       
        
      };
  return (
    <>
    <div className="AdResources">
        <div className="bg-gray-200 mt-5 h-[55vh] p-5 rounded ">
            <div className="flex justify-center  ">
            this banner is for the Resources ad 

            
            </div>

            <Slider {...settings}>
            <div>
                a
            </div>
            
            <div>
                b
            </div>

            <div>
                c
            </div>
        </Slider>
        </div>

    </div>
    
    
    
    </>
    
  )
}
