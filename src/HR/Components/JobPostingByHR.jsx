import React, { useState } from 'react'

export default function JobPostingByHR() {
  const [AddPosting, setAddPosting] = useState(false)
  return (
    <>
      <div className=' overflow-hidden h-[100vh]   rounded-md'>
        <div class="   fit-content h-[100vh] grid   p-2 ">
          <div className=" bg-yellow-200 rounded-xl px-12 py-20">
            <div className='grid  grid-cols-[20%,80%]  justify-evenly gap-8'>
              <div>
              <button onClick={()=>(setAddPosting(!AddPosting))} className='bg-gray-100 rounded-3xl px-10 py-2'> {AddPosting ? 'Discard' : 'Add Posting'}</button>

              </div>
             {AddPosting &&
             <div className='bg-gray-400 p-10 rounded'>
             <form className='grid grid-cols-[28%,50%] justify-start gap-4'>
               
               <div className=''>
                 <label htmlFor="JobTitle">job title</label><br />
                 <input className='rounded h-10 w-[15vw] p-2 ' type="text" name="JobTitle" id="JobTitle"  placeholder=''/>
               </div>

               <div>
               <label htmlFor="EmploymentType<">Employment Type</label><br />
               <input className='rounded h-10 w-[15vw] p-2' type="text" name="JobTitle" id="EmploymentType<"  placeholder=''/>
               </div>

               <div>
                 <label htmlFor="JobDisc">Job discription</label>
                 <textarea className='rounded max-h-[12vw] p-2' name="text" id="JobDisc" ></textarea>
               </div>

               <div>
               <label htmlFor="Qualifications<">Qualifications</label><br />
               <input className='rounded h-10 w-[15vw] p-2' type="text" name="text" id="Qualifications<"  placeholder=''/>
               </div>

             </form>
           </div>
             
             }
                
            </div>
          </div>
        </div>
        
    </div>
    </>
  )
}
