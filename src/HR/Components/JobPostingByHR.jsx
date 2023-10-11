import React, { useState } from 'react'
import EditPostVector from "../HrImgORicon/EditPostVector.svg";
import DeletePostVector from "../HrImgORicon/DeletePostVector.svg";

export default function JobPostingByHR() {

  const [AddPosting, setAddPosting] = useState(false)
 const [data, setData] = useState([]);
  const [newRow, setNewRow] = useState({ JobTitle: '', EmploymentType: '' ,jobDescription:'' });
  const [editingRowId, setEditingRowId] = useState(null);
  const [deletedRowId, setDeletedRowId] = useState(null);
  const addRow = () => {
    
    if (newRow.JobTitle.trim() === '' || newRow.EmploymentType.trim() === '' ||newRow.jobDescription.trim() === '' ) return;

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

    setNewRow({ JobTitle: '', EmploymentType: '',jobDescription:''  });
  };

  const deleteRow = (rowId) => {
    setDeletedRowId(rowId); 
    setTimeout(() => {
      const updatedData = data.filter((row) => row.id !== rowId);
      setData(updatedData);
      setDeletedRowId(null);
    }, 300); 
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
      

    <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-stroke-dark dark:bg-box-dark">
        <div className="   fit-content grid   p-2 ">
            <div className=" bg-yellow-00 rounded-xl px-12 py-20 ">

    <div className='grid  grid-cols-[20%,80%]  justify-evenly gap-8 '>
      <div className={`   `}>
      <button
      onClick={() => {setAddPosting(!AddPosting);
                      setEditingRowId(null);
                      setNewRow({ JobTitle: '', EmploymentType: '', jobDescription: '' });
                    }} className={`   bg-gray-100 rounded-3xl px-10 py-2`}> {AddPosting ? 'Discard' : 'Add Posting'}</button>

      </div>

    
      <div className={`${AddPosting ? "block":"hidden"}  bg-orange-300 p-10 rounded `}>        
                      <div className=' flex flex-col   gap-4  justify-start'>

                          <div className='grid grid-cols-[50%,50%] justify-end gap-4'>
                            
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

                            <textarea 
                            className='rounded w-[22vw] p-2 max-w[24vw] font-light '
                            value={newRow.jobDescription}
                            onChange={(e) => setNewRow({ ...newRow, jobDescription: e.target.value })}
                            placeholder="Job Discription"
                            name=""
                            id=""
                              />

                          </div>
                          <div>
                          <button className={`${ (newRow.EmploymentType)&&(newRow.JobTitle) ? 'visible': 'invisible'} bg-gray-200  rounded-full py-2 px-12 `} onClick={addRow}>
                              {editingRowId !== null ? 'Update Post' : 'Add Post'}
                          </button>

                          </div>
                        
                      </div>                      
      </div>           
    </div>

    {/* --------------------------- */}
                        { !AddPosting&&
                            <div className='mt-10 flex flex-col-reverse justify-between gap-2'>
                            {data.map((row) => (
                              <div key={row.id} className= {`${ row.id === deletedRowId ? '   opacity-2 transition ease-in-out  delay-150 -translate-y-1 scale-95 duration-300' : ''} group `} >
                                <div className='group-hover:visible invisible flex ml-auto justify-end px-10 gap-3'>
                                  <button className='    bg-green-300 rounded p-2 group-hover:block ' onClick={() => editRow(row.id)}> <img src={EditPostVector} alt="" /> </button>
                                  <button className='bg-red-300 p-2 rounded group-hover:block' onClick={() => deleteRow(row.id)}> <img src={DeletePostVector} alt="" /></button>
                                </div>

                                <div className=' md:flex  p-[1rem]   rounded-[0.6rem] bg-gray-100'>
                                  <div className='bg-gray-200 p-10 px-14 rounded-[0.4rem]  '>img</div>

                                  <div className='mr-auto bg-green-00 p-5  w-[42rem]' >
                                    <ul className='list-disc md:grid grid-flow-col justify-start gap-8'> <li>Job Title : {row.JobTitle}</li> <li> Employment Type : {row.EmploymentType}</li></ul>
                                    <div> </div>
                                    <div>{row.jobDescription}</div>
                                  </div>
                                  <div className='flex   m-auto mb-1 '>
                                  <button className=' px-7 rounded-full border border-black'>See</button>
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



