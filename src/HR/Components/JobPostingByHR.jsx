import React, { useState } from 'react'

export default function JobPostingByHR() {

  const [AddPosting, setAddPosting] = useState(false)
 const [data, setData] = useState([]);
  const [newRow, setNewRow] = useState({ JobTitle: '', EmploymentType: '' });
  const [editingRowId, setEditingRowId] = useState(null);

  const addRow = () => {
    
    if (newRow.JobTitle.trim() === '' || newRow.EmploymentType.trim() === '') return;

    if (editingRowId !== null) {
      const updatedData = data.map((row) =>
        row.id === editingRowId ? { ...row, ...newRow } : row
      );
      setData(updatedData);
      setEditingRowId(null);
      setAddPosting(false);
    } else {
      setAddPosting(false);
      const row = {
        id: Date.now(),
        ...newRow,
      };
      setData([...data, row]);
    }

    setNewRow({ JobTitle: '', EmploymentType: '' });
  };

  const deleteRow = (rowId) => {
    const updatedData = data.filter((row) => row.id !== rowId);
    setData(updatedData);
  };

  const editRow = (rowId) => {
    setAddPosting(true);

    const rowToEdit = data.find((row) => row.id === rowId);
    if (rowToEdit) {
      setNewRow({ ...rowToEdit });
      setEditingRowId(rowId);
    }
  };

  
  
  return (
    <>
      <div className=' overflow-hidden h-[100vh]   rounded-md'>
        <div className="   fit-content h-[100vh] grid   p-2 ">
          <div className=" bg-yellow-200 rounded-xl px-12 py-20 overflow-y-scroll">

            {/* things started from here  */}
            <div className='grid  grid-cols-[20%,80%]  justify-evenly gap-8 '>
              <div className={`   `}>
              <button onClick={() => {setAddPosting(!AddPosting); setEditingRowId(null);}} className={`   bg-gray-100 rounded-3xl px-10 py-2`}> {AddPosting ? 'Discard' : 'Add Posting'}</button>

              </div>

             {AddPosting &&
              <div className='bg-gray-400 p-10 rounded '>        
                              <div className='flex justify-evenly'>

                                <input
                                    className='rounded h-10 w-[15vw] p-2 font-light '
                                    type="text"
                                    placeholder="Job Title"
                                    value={newRow.JobTitle}
                                    onChange={(e) => setNewRow({ ...newRow, JobTitle: e.target.value })}
                                  />
                                  <input
                                  className='rounded h-10 w-[15vw] p-2 font-light'
                                    type="text"
                                    placeholder="Employment Type"
                                    value={newRow.EmploymentType}
                                    onChange={(e) => setNewRow({ ...newRow, EmploymentType: e.target.value })}
                                  />
                                  <button className='bg-gray-400  rounded' onClick={addRow}>
                                    {editingRowId !== null ? 'Update Post' : 'Add Post'}
                                  </button>
                              </div>                      
              </div>           
             } 
                
            </div>

            {/* --------------------------- */}
                           

  
                                 { !AddPosting&&
                                    <div className='mt-10 flex flex-col-reverse justify-between gap-1'>
                                    {data.map((row) => (
                                      <div key={row.id} className='group mb-4'>
                                        <div className='group-hover:visible invisible flex ml-auto justify-end gap-0'>
                                          <button className='bg-green-400 px-5 group-hover:block' onClick={() => editRow(row.id)}>Edit</button>
                                          <button className='bg-red-400 px-5 group-hover:block' onClick={() => deleteRow(row.id)}>Delete</button>
                                        </div>
                                        <div className='flex p-10 rounded-md bg-gray-100'>
                                          <div className='bg-gray-200 p-10'>
                                            <div>{row.JobTitle}</div>
                                            <div>{row.EmploymentType}</div>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                    </div> 
                                }
                                
                                
                           
                              
          </div>
          
        </div>
        
    </div>
    </>
  )
}

