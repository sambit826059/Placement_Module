
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadBanner from "./HeadBanner";
import  resources from "./ImgORicon/resources.webp";
import SliderImageSecond from "./ImgORicon/SliderImageThree-3.svg";
import SliderImageFirst from "./ImgORicon/SliderImageTwo-2.svg";
import  SliderImageThird from "./ImgORicon/SliderImageOne-1.svg";



export default function SliderHeadBanner() {

  const settings = {
    dots: true, 
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // beforeChange: (oldIndex, newIndex) => {
    //   setCurrentSlide(newIndex);
    // },
    
  };

  // const [currentSlide, setCurrentSlide] = useState(0);

  // const slideCount = 3;

 const HeadBannerButtonStyle_FirstBanner=' bg-yellow-200 bg-opacity-100   hover:bg-gray-700 text-orange-500  hover:text-white top-10 sm:top-[9rem] left-5 sm:left-[35rem] mt-2 sm:mt-4 md:mt-6 ml-2 sm:ml-4 md:ml-6  ';
const HeadBannerButtonStyle_SecondBanner=' bg-white bg-opacity-75   hover:bg-gray-700 text-black  hover:text-white top-10 sm:top-[9rem] left-5 sm:left-[66rem] mt-2 sm:mt-4 md:mt-6 ml-2 sm:ml-4 md:ml-6  ';
const HeadBannerButtonStyle_ThirdBanner=' bg-white bg-opacity-75  hover:bg-gray-700 text-black  hover:text-white top-10 sm:top-40 left-5 sm:left-20 mt-2 sm:mt-4 md:mt-6 ml-2 sm:ml-4 md:ml-6  ';


  return (
    <div className="  md:px-3 mb-7 ">
      <Slider {...settings}>
        <div>
             <HeadBanner 
             HeadBannerImage={SliderImageFirst}
             HeadLineForHeadBAnner={" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt sint expedita sequi."}
             HeadBannerButtonName={'Check Resources'}
             HeadBannerButtonStyle={HeadBannerButtonStyle_FirstBanner}
             />
        </div>
                                    {/* bg-gray-300 bg-opacity-50  hover:bg-gray-700 text-black  hover:text-white top-10 sm:top-40 left-5 sm:left-20 mt-2 sm:mt-4 md:mt-6 ml-2 sm:ml-4 md:ml-6  */}

        <div>
             <HeadBanner HeadBannerImage={SliderImageSecond} 
                          HeadLineForHeadBAnner={" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt sint expedita sequi."}
                          HeadBannerButtonName={'Know more'}
                          HeadBannerButtonStyle={HeadBannerButtonStyle_SecondBanner}

                          />
        </div>

        <div>
        <HeadBanner HeadBannerImage={SliderImageThird} 
                     HeadLineForHeadBAnner={" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt sint expedita sequi."}
                     HeadBannerButtonName={'Know more'}
                     HeadBannerButtonStyle={HeadBannerButtonStyle_ThirdBanner}


        />
        </div>
      </Slider>

      {/* <div className="py-4 gap-0  flex justify-center">
        {[...Array(slideCount).keys()].map((index) => (
          <div
            key={index}
            className={`w-12 h-1 mx-1 rounded bg-gray-400 ${
              index === currentSlide ? "bg-gray-900" : ""
            }`}
          ></div>
        ))}
      </div> */}
      
     
        
    </div>
  );
};

