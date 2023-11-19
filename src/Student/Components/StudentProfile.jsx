import React from 'react'

export default function StudentProfile() {
  return (
    <>
    <div className='p-14 px-[18rem] grid  gap-2'> 
        <h1 className='text-[2rem]'>Profile</h1>
        <div className=" overflow-hidden rounded-sm border border-slate-500 border-stroke bg-white shadow-default dark:border-stroke-dark dark:bg-box-dark">
            <div className="   fit-content grid   p-2 ">
            <div className=" bg-slate-00  px-4 py-10 grid gap-4 items-center text-center justify-center">
                <img className='p-24 bg-slate-100 rounded-full' src="" alt="" />
                <div className='text-xl'>
                    Soumen Bhunia
                    <h5 className='text-sm text-slate-400 font-light'>Frontend Developer</h5>

                </div>
            </div>
            </div>
        </div>
    </div>
    
    </>
  )
}