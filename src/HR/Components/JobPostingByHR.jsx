import React, { useState,useEffect } from 'react'
import EditPostVector from "../HrImgORicon/EditPostVector.svg";
import DeletePostVector from "../HrImgORicon/DeletePostVector.svg";
import { Link, useParams } from 'react-router-dom';

export default function JobPostingByHR() {

  const [jobpost, setJobpost] = useState({
    title: "",  
    description: "", 
    company: "",
    employmentType:""
    
  });
  const [addedMsg, setAddedMsg] = useState(false);
  const[errorMeg,setErrorMeg]=useState(false);
  const [addpost, setAddpost] = useState(false);



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
      fetch("http://localhost:8080/jobpostings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jobpost)
      })
        .then(() => {
          console.log("New job added");
          setAddedMsg(true);
          setErrorMeg(true);
          loadJobPost();

          setTimeout(() => {
             setErrorMeg(false);
             setAddedMsg(false);
             setAddpost(!addpost);
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
    fetch('http://localhost:8080/jobpostings')
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

  const {id}=useParams();


  const DeleteJobPost=(id)=>{
    fetch(`http://localhost:8080/jobpostings/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        loadJobPost();
      })
      .catch(error => {
        console.error('Error deleting user:', error);
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

    };
 


  

  
  return (
    <>
      

      <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-stroke-dark dark:bg-box-dark ">
      <div className={` py-10 px-5 ${!addpost ? "md:p-10  grid justify-items-center" : ""}  `}>
              <div className=" bg-yellow-00 rounded-xl   ">         
                <button className='w-max bg-gray-100 rounded-3xl px-10 py-2' onClick={() => {setAddpost(!addpost); EmptyForm();} } >{!addpost ? "Addpost" : "discard" }</button>

                  <div className={`${!addpost? 'hidden' : 'block' }`}>
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



                  <div className={`${addpost? 'hidden  opacity-2 transition ease-in-out  delay-150 -translate-y-1 scale-95 duration-300' : 'block' } mt-10 flex flex-col-reverse justify-between gap-2 z-0  `}>
                      {jobposts.map((jobpost, index) => (
                        <div key={index} className= {`   opacity-2 transition ease-in-out  delay-150 -translate-y-1 scale-95 duration-300'  group `} >
                          <div className='group-hover:visible invisible flex ml-auto justify-end px-10 gap-3'>
                            <Link to={`/HR/hr/jobpost/${jobpost.id}`} className='    bg-green-300 rounded p-2 group-hover:block '  > <img src={EditPostVector} alt="" /> </Link>
                            <button className='bg-red-300 p-2 rounded group-hover:block' onClick={() => DeleteJobPost(jobpost.id)} > <img src={DeletePostVector} alt="" /></button>
                          </div>

                          <div className='  grid  max max-sm:gap-4  sm:flex  p-[1rem]   rounded-[0.6rem] bg-gray-100'>
                            <div className='bg-gray-200  p-2 sm:h-[8rem] sm:w-[8rem]  rounded-[0.4rem] flex items-center justify-center'>
                              
                            </div>

                            <div className='mr-auto bg-green-00 px-7 ' >
                              <ul className='list-disc md:grid grid-flow-col justify-start gap-8'> <li>Job title : {jobpost.title}</li> <li> Employment Type : {jobpost.employmentType}</li></ul>
                              <div> </div>
                              <div>{jobpost.description}</div>
                            </div>
                            <div className=' m-auto mb-1 justify-self-end'>
                            <button className='  px-7 rounded-full border border-black '>See</button>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div> 
              </div>
            </div>

       </div>

    </>
  )
}








 



