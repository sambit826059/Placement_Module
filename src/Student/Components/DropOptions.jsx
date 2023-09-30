import React from 'react'
import { Link } from 'react-router-dom'

export default function DropOptions(props) {
  return (
    <>
    
    <Link className='transform  transform-origin-top transition-transform duration-400 ease-in-out' to={props.OptionLink}><li className='hover:bg-gray-100 border hover:text-black  text-gray-500 text-center px-10 py-1.5 rounded text-[1.2rem]  '>{props.Options}</li></Link>

    </>
  )
}
