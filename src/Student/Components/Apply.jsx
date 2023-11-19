import React from 'react'
import GoToTop from './GoToTop'
import NavBar from "./NavBar";


export default function Apply() {
  document.title = "Apply [Placement Module]";

  // http://localhost:8080/hr
  return (
    <>

            <div className="text-left p-10 font-medium bg-yellow-100 "> 
            <h1 className='text-[2rem] pl-10 '>Apply here</h1>
           
                                    <div className='mt-10 flex flex-col-reverse justify-between gap-2 '>
                                    
                                      <div  className= {`  opacity-2 transition ease-in-out  delay-150 -translate-y-1 scale-95 duration-300'  group `} >
                                       

                                        <div className=' grid  max max-sm:gap-4  sm:flex  p-[1rem]   rounded-[0.6rem] bg-gray-100'>
                                          <div className='bg-gray-200  p-2 sm:h-[8rem] sm:w-[8rem]  rounded-[0.4rem] flex items-center justify-center'>
                                              
                                                <img className=' max-sm:h-[25vw]  max-sm:w-[85vw]  object-center object-cover' src="" alt=" Company Logo" />
                                             
                                          </div>

                                          <div className='mr-auto bg-green-00 px-7 ' >
                                            <ul className='list-disc md:grid grid-flow-col justify-start gap-8'> <li>Job Title : </li> <li> Employment Type : </li></ul>
                                            <div>job discription </div>
                                            <div>some thing else</div>
                                          </div>
                                          <div className=' m-auto mb-1 justify-self-end'>
                                          <button className='  px-7 rounded-full border border-black '>Aply </button>
                                          </div>
                                        </div>
                                      </div>
                                    
                                    
                                    </div> 
                                
           </div>

           <GoToTop/>
   </>
  )
}
