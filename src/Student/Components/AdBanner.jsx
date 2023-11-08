import React from 'react'
import ADbanner_Card from './ADbanner_Card'
import Hackathon_bg from "../ImgORicon/bg-hackathon.svg";
import Internship_bg from "../ImgORicon/bg_internship.svg";

export default function AdBanner() {
  return (
    <>
    <div className=" h-[55vh] p-0 gap-3 flex flex-col rounded ">
      <h1 className='text-2xl'>Explore</h1>
        <div className='flex gap-[2rem] justify-evenly '> 
        <ADbanner_Card bg={Internship_bg}/>
        <ADbanner_Card bg={Hackathon_bg }/>
        </div>
    </div>
    </>
  )
}
