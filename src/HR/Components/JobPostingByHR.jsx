import React from 'react'

export default function JobPostingByHR() {
  return (
    <>
    <div className="p-10">
        <button className='bg-green-400' >Add Job posting</button>
        <br />
        Post the job Posting Details:- 
        <ul>
            <li >job title <input className='bg-green-100' type="text" name="JobTitle" id="" /> </li>
            <li>Job discription <textarea className='bg-green-100' name="Jobdiscription" id="" cols="30" rows="10"></textarea></li>
            <li>Qualifications: <input className='bg-green-100' type="text" name="JobTitle" id="" /></li>
        </ul>
        <button className='bg-blue-400' >Submit</button>

    </div>
    </>
  )
}
