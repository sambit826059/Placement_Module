import React, { useState,useEffect,useNavigate } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function JobPostingUpdate() {

    const [jobpost, setJobpost] = useState({
        title: "",  
        description: "", 
        company: "",
        employmentType:""
        
      });
      const [addedMsg, setAddedMsg] = useState(false);
      const[errorMeg,setErrorMeg]=useState(false);
      const [addpost, setAddpost] = useState(false);
      let navigate = useNavigate();
      const {id}=useParams();
    
    
      const { title,description, company ,employmentType } = jobpost;
    
      const onInputChange = (e) => {
        setJobpost({ ...jobpost, [e.target.name]: e.target.value });
      };
    
    
      const HandleForm = (e) => {
        e.preventDefault();
        console.log(jobpost);
    
        if (jobpost.title === '' || jobpost.description === '' || jobpost.company === '' || jobpost.employmentType === '' ) {
          setErrorMeg(true);
        } else {
          fetch(`http://localhost:8080/hr/jobpost/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(jobpost)
          })
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
            .then(() => {
              console.log("Updated job Post");
              setAddedMsg(true);
              setErrorMeg(true);
              loadJobPost();
    
              setTimeout(() => {
                 setErrorMeg(false);
                 setAddedMsg(false);
                 setAddpost(!addpost);
                 navigate("/HR/jobposting");
              }, 1000);
        
              
        
              EmptyForm();
             
            });
        }
        
      };
    
      const [jobposts, setJobposts] = useState([]);
    
      useEffect(()=>{
       loadJobPost();
      },[]);
    
      const loadJobPost=()=>{
        fetch(`http://localhost:8080/hr/jobpost/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((result) => {
          setJobposts(result);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    
      }
    
      
    
  
    
    
      const EmptyForm = () => {
        setErrorMeg(false);
        setJobpost({
          title: "",  
          description: "", 
          company: "",
          employmentType:""
        });
        if (jobpost.title === '' || jobpost.description === '' || jobpost.company === '' || jobpost.employmentType === '') {
            navigate("/HR/jobposting");
          }
    
        };
     
    
    
  return (
    <>
    <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-stroke-dark dark:bg-box-dark ">
      <div className={` py-10 px-5  "md:p-10  grid justify-items-center"   `}>
              <div className=" bg-yellow-00 rounded-xl   ">         

                  <div >
                      <form onSubmit={(e) => HandleForm(e)} className='grid gap-5 flex-col justify-center align-center pt-10'>
                          <input value={title} onChange={(e) => onInputChange(e)} name="title" className='bg-gray-100 rounded-sm p-2 w-[75vw] md:w-[22rem]' type="text" placeholder='title' />
                          <input value={description} onChange={(e) => onInputChange(e)} name="description" className='bg-gray-100 rounded-sm p-2 md:w-[22rem]' type="text" placeholder='description' />
                          <input value={company} onChange={(e) => onInputChange(e)} name="company" className='bg-gray-100 rounded-sm p-2 md:w-[22rem]' type="text" placeholder='company' />
                          <input value={employmentType} onChange={(e) => onInputChange(e)} name="employmentType" className='bg-gray-100 rounded-sm p-2 w-[75vw] md:w-[22rem]' type="text" placeholder='employmentType' />


                          <div className='flex gap-4'>
                            <button  type="submit" className='bg-slate-800 cursor-pointer text-white w-full p-2 rounded-sm'>Add</button>
                            <input type="button" onClick={EmptyForm} value="Cancel" className='bg-red-700 cursor-pointer text-white w-full p-2 rounded-sm' />
                          </div>

                          <div className={`${addedMsg ? "block" : "hidden"}  text-green-500 text-center border border-green-500 p-0 flex justify-between`}>
                            <h4 className='p-2'>Successfully added</h4>
                          </div>
                          

                          <div className={`${errorMeg ? "block" : "hidden"}  text-red-500 text-center border border-red-500 p-0 flex justify-between`}>
                            <h4 className='p-2'>Fill properly</h4>
                          </div>
                      </form>
                  </div>

              </div>
            </div>

       </div>
    </>
  )
}
