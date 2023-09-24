import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ResourcesBox from './ResourcesBox';

export default function AdResources() {

    const settings = {
        dots: false, 
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
       
        
      };
  return (
    <>
    <div className="AdResources">
        <div className="bg-gray-200 mt-5  py-8 rounded box-content">
            <div className="flex justify-center py-5 mb-5 ">
            this banner is for the Resources ad 

            
            </div>

            <Slider {...settings}>
            <div>
                <ResourcesBox/>
            </div>
            
            <div>
               <ResourcesBox/>
            </div>

            <div>
              <ResourcesBox/>
            </div>
            <div>
              <ResourcesBox/>
            </div><div>
                <ResourcesBox/>
            </div>
            
            <div>
               <ResourcesBox/>
            </div>

            <div>
              <ResourcesBox/>
            </div>
            <div>
              <ResourcesBox/>
            </div>
        </Slider>
        </div>

    </div>
    
    
    
    </>
    
  )
}
