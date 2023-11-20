import React from 'react'

export default function HrHome() {
  document.title = "HR Dashboard -[Placement Module]";

  return (
    <>
    <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-stroke-dark dark:bg-box-dark">
        <div className="   fit-content grid   p-2 ">
          <div className=" bg-gray-00  p-1 py-10">
          
            <h1 className='text-center text-xl'> Dashboard</h1>
             
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0 ">

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
                                  jobs listed
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                  jobs applied 
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
        </div>
    </div>
  
    </>
  )
}
