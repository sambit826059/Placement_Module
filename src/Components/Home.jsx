import React from 'react'
import NavBar from "./NavBar";
import HeadBanner from "./HeadBanner";
import GoToTop from './GoToTop';
import SliderHeadBanner from "./SliderHeadBanner";
import AdBanner from './AdBanner';
import AdResources from './AdResources';

export default function Home() {
  return (
    <>
    <div className="  px-7 md:px-10">
    <SliderHeadBanner/>
      <AdBanner/>
      <AdResources/>

      <GoToTop/>
    </div>


    
      
      
    </>
  )
}
