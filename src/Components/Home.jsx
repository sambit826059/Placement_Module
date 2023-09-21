import React from 'react'
// import NavBar from "./NavBar";
import HeadBanner from "./HeadBanner";
import GoToTop from './GoToTop';
import SliderHeadBanner from "./SliderHeadBanner";
import AdBanner from './AdBanner';

export default function Home() {
  return (
    <>
    <div className=" p-7">
    <SliderHeadBanner/>
      <GoToTop/>
      <AdBanner/>

    </div>
      
      
    </>
  )
}
