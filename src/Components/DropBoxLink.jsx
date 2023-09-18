import React from 'react'
import DroupDownButton from "./ImgORicon/NavBarDropDownBtn.svg";
import DropOptions from './DropOptions';

export default function DropBoxLink(props) {
  return (
    <>
       <div className=''>
                            <h6 className=' flex gap-2 hover:bg-gray-300 px-1 py-0.5 rounded group  '>
                                <a href="#">  {props.LinkName}</a>
                                <img className='transform rotate-0 group-hover:rotate-180 transition-transform  cursor-pointer' src={DroupDownButton} alt="DroupDown" />
                            </h6>

                            <ul className=' absolute hidden group-hover:block z-999  py-5  px-5 mt-0  ml-[-4.1rem] bg-green-0 '>
                                <li className=''>
                                    <ul className='py-7 px-4 shadow-lg border rounded grid gap-1 transform scale-y-1  bg-white backdrop-blur-sm '>
                                        <DropOptions Option_1={[props.Option_1]} />
                                        <DropOptions Option_1={[props.Option_1]} />
                                        <DropOptions Option_1={[props.Option_1]} />

                                    </ul>
                                </li> 
                            </ul>


       </div>

                            

         
    </>
  )
}
