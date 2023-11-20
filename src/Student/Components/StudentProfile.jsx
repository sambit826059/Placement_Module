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
              <h1 className='text-[1.2rem] bg-gray-200 w-max p-2 '>Applied Job Dashboard </h1>
               <div className="h-[30vh] grid grid-cols-2 gap-4 border-4 border-dashed border-gray-200 rounded-lg ">

                  <div className="flex flex-col ">
                    <div className="overflow-x-hidden">
                      <div className="p-1.5 w-full inline-block align-middle">
                        <div className=" border rounded-lg">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                  ID
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                   jobs applied
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                 Job status  
                                </th>
                               
                                
                                
                              </tr>
                            </thead >
                            <tbody className="divide-y divide-gray-200">
                                
                                  <tr >
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                      1.
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">....</td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">....</td>
                                  </tr>
                          </tbody>

                          </table>
                        </div>
                        
                        
                      </div>
                    </div>
                  </div>
      
                  <div className="flex flex-col ">
                    <div className="overflow-x-hidden">
                      <div className="p-1.5 w-full inline-block align-middle">
                        <div className=" border rounded-lg">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>

                                <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                   Analytics
                                </th>
 
                              </tr>
                            </thead >
                            <tbody className="divide-y divide-gray-200">   
                                  <tr >
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                      see more....
                                    </td>
                                  </tr>
                          </tbody>

                          </table>
                        </div>
                        
                        
                      </div>
                    </div>
                  </div>

               </div>
            </div>
        </div>
    </div>
    
    </>
  )
}