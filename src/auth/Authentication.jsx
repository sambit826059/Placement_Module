import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default function Authentication(props) {

    const [selectedValue, setSelectedValue] = useState('');

  const handleDropdownChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedValue(selectedOption);
  };

  const userTypeMap = {
    option1: 'Student',
    option2: 'HR',
    option3: 'Admin',
  };
  const selectedUserType = userTypeMap[selectedValue];

  return (
    <>
     <div className='p-12 py-[5rem] border-2 border-black rounded-xl bg-white '>
        Welcome
          <br />
          <label htmlFor="dropdown">User type:</label>
          <select id="dropdown" name="dropdown" onChange={handleDropdownChange}>
        <option value="option0">Not Selected</option>
            <option value="option1">Student</option>
            <option value="option2">HR</option>
            <option value="option3">Admin</option>
        </select>
        { selectedUserType && <h1 className='text-green-400'>hello {selectedUserType}</h1> }
                
            <form action="/signup" method="post">
                <label htmlFor="">Username</label><br/>
                <input className='bg-gray-200' type='text' name='username'/>
                <br />
                <label htmlFor="">Password</label><br/>
       {
        props.NeedRePasswordInputBox &&
            <>
                <input className='bg-gray-200' type='password' name='password'/><br />
                <label htmlFor="">Re Password</label><br/> 
            </>
        }

                <input className='bg-gray-200' type='password' name='Re_password'/><br />
                
                <Link to={'/Student'}> <button className='bg-gray-200 p-4 mt-2'>Submit</button></Link>
            </form>
            <h6>already have a account </h6>
            <Link to={props.Links}> <button className='p-4'>{props.LinkButtonName}</button></Link>

        </div>
    </>
  )
}
