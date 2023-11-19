import React from 'react'

export default function ADbanner_Card(props) {
  return (
    <div  className=''>
        <img className='w-[45vw] rounded-lg ' src={props.bg} alt="" />
        

        {
        props.Internship ? (
            <div className='text-white leading-[3.4rem] absolute left-[6vw]  top-[65vh] text-[3rem]  text-right font-bold'>
                <h1>Get Your</h1> <h1>Internship</h1>
                <h6 className='text-[1.4rem] font-normal'>Work on Industry standard projects. </h6>
                <hr className='rounded h-[0.02rem] border-none bg-white'/>
                <h1 className='absolute transform -rotate-90 opacity-40 top-14 left-[33.4vw]'>Internship</h1>
            </div>
        ):
        (
            <div className=' text-white leading-[3.4rem]  text-[3rem] absolute top-[65vh] left-[54vw] justify-end font-bold'>
                <h1 className='w-10 '>Join Hackathon</h1>
                <h6 className='text-[1.4rem] font-normal'>Work with your team build real things. </h6>
                <hr className='rounded h-[0.02rem] border-none bg-white'/>
                <h1 className='absolute transform -rotate-90 opacity-40 top-14 left-[31.4vw]'>Hackathon</h1>

            </div>
        )

        }



        
    </div>
  )
}
