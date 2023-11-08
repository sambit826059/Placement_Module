import React from 'react'
import ADbanner_Card from './ADbanner_Card'
import Hackathon_bg from "../ImgORicon/bg-hackathon.svg";
import Internship_bg from "../ImgORicon/bg_internship.svg";

export default function AdBanner() {
  return (
    <>
    <div className=" h-[55vh] pt-3 gap-3 flex flex-col rounded ">
        <div className='flex gap-0 justify-evenly '> 
        <ADbanner_Card bg={Internship_bg} Internship={true} />
        <ADbanner_Card bg={Hackathon_bg }/>
        </div>
    </div>
    </>
  )
}
