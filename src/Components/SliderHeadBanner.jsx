
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadBanner from "./HeadBanner";
import  resources from "./ImgORicon/resources.webp";


export default function SliderHeadBanner() {





  const settings = {
    dots: false, 
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <button className="slick-prev">Previous</button>,
    nextArrow: <button className="slick-next">Next</button>,
    
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
    
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const slideCount = 3;





  return (
    <div className="p-7  ">
      <Slider {...settings}>
        <div>
             <HeadBanner HeadBannerImage={resources}/>
        </div>
        
        <div>
             <HeadBanner HeadBannerImage={"https://picsum.photos/id/18/200/300"} />
        </div>

        <div>
        <HeadBanner HeadBannerImage={"https://picsum.photos/seed/picsum/200/300"} />
        </div>
      </Slider>

      <div className="py-4 gap-0  flex justify-center">
        {[...Array(slideCount).keys()].map((index) => (
          <div
            key={index}
            className={`w-12 h-1 mx-1 rounded bg-gray-400 ${
              index === currentSlide ? "bg-gray-900" : ""
            }`}
          ></div>
        ))}
      </div>
      
     
        
    </div>
  );
};

