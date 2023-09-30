import React, { useState } from 'react'
import DroupDownButton from "../ImgORicon/NavBarDropDownBtn.svg";
import DropOptions from './DropOptions';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default function DropBoxLink(props) {

  const [OpenDropBox,setOpenDropBox]=useState(false);

  return (
    <>
       <div className=''>
                            <h6 className=' flex gap-2 md:group  '>

                              
                                <a href="#"  onClick={()=>setOpenDropBox(!OpenDropBox)}>  {props.LinkName}</a>
                                <img onClick={()=>setOpenDropBox(!OpenDropBox)} className={`transform rotate-0 max-sm:group  ${OpenDropBox ? 'max-sm:rotate-180': 'max-sm:rotate-0'} md:group-hover:rotate-180 transition-transform  cursor-pointer `} src={DroupDownButton} alt="DroupDown" />
                            </h6>

                            <ul className={`   sm:absolute hidden  ${OpenDropBox ? 'max-sm:block ' : 'max-sm:hidden '}           md:group-hover:block z-999  py-5  px-5 mt-0   sm:ml-[-5rem] bg-green-00       `}>
                                <li className='grid justify-center  '>
                              
                                <div className="absolute bg-white p-7 rotate-45 ml-20  border rounded   ">
                                    </div>
                                    
                                    <ul className='py-3 pt-5 px-2 shadow-lg border rounded grid gap-1 transform scale-y-1  bg-white backdrop-blur-sm  transition-transform duration-500 ease-in-out   '>
                                    <div className="absolute bg-white p-7 rotate-45 ml-20    ">
                                    </div>
                                    
                                      {props.Option_1 ? (<DropOptions Options={[props.Option_1]}  />) :null}  
                                      {props.Option_2 ? (<DropOptions Options={[props.Option_2]} OptionLink={"/"} />) :null}  
                                      {props.Option_3 ? (<DropOptions Options={[props.Option_3]} />) :null}  

                                    </ul>
                                </li> 
                            </ul>


       </div>

                            

         
    </>
  )
}
