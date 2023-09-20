
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeadBanner from "./HeadBanner";
import  resources from "./ImgORicon/resources.webp";



export default function SliderHeadBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="p-7">
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
    </div>
  );
};

