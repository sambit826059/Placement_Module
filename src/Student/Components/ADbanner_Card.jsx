import React from 'react'

export default function ADbanner_Card(props) {
  return (
    <div>
        <img className='w-[45vw] rounded-lg ' src={props.bg} alt="" />
        <div className='text-white absolute left-40 top-[30rem]'>

{
  props.bg.Hackathon_bg && (
    <h1 className='text-[3rem]'>lorem</h1>
  )
}
{
  props.bg.Internship_bg && (
    <h1 className='text-[3rem]'>lorem2</h1>
  )
}


        </div>
    </div>
  )
}
