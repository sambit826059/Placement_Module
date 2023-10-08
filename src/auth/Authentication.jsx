import React, { useState,useEffect, useContext } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ContextUserType from '../Contexts/ContextUserType';
import AuthUserType from './AuthUserType';

export default function Authentication(props) {

    const [selectedValue, setSelectedValue] = useState('');
    const [UserName, setUserName] = useState('')
    const [PassWord, setPassWord] = useState('')
    const [RePassWord, setRePassWord] = useState('')
    const [Errormesg, setErrormesg] = useState('')
    // const [selectedUserType, setSelectedUserType] = useState('')

    // const {selectedUserType}=useContext(ContextUserType);
    // const {setSelectedUserType}=useContext(ContextUserType);

  //  const { selectedUserType, setSelectedUserType } = useContext(ContextUserType);

  const userTypeMap = {
    NormalUser:'Not Selected',
    Student: 'Student',
    HR: 'HR',
    Admin: 'Admin',
  };
  // setSelectedUserType(userTypeMap[selectedValue]);

  const selectedUserType=userTypeMap[selectedValue];

  const [Entry_Link,setEntry_Link]=useState('')

 
  const  HandleFormSubmit=(e)=>{
    e.preventDefault(); 
  }


  useEffect(() => {
    if (selectedUserType === 'Student') {
      // if(UserName==='soumen' && PassWord==='102'){
        setEntry_Link('/Student/Home');

      // }
      // else if(UserName==='sambit'&& PassWord==='42'){
        // setEntry_Link('/Student/Home');
      // }
      // else{
        // setEntry_Link('');
      // }
    } 
    else if (selectedUserType === 'HR') {
      setEntry_Link('/HR/home');

    }
    else if (selectedUserType === 'Admin') {
      setEntry_Link('/Admin');

    }
    else 
    {
      setEntry_Link('');
    }
  }, [selectedUserType,UserName,PassWord]);

  


  return (
    <>
     <div className=' rounded-r-xl grid  place-content-center text-center '>

        <div className='  gap-7 grid   '>

             <h1 className=' text-center text-2xl'>User Login</h1>

            <div>
              <label htmlFor="dropdown">User type:</label>
                <select id="dropdown" name="dropdown"value={selectedValue} onChange={(e)=>setSelectedValue(e.target.value)}>
                  <option value="NormalUser">Not Selected</option>
                  <option value="Student">Student</option>
                  <option value="HR">HR</option>
                  <option value="Admin">Admin</option>
                </select>


                <form  className='grid  place-content-center   gap-6 ' action="/signup" method="post" onSubmit={HandleFormSubmit}>
                    
                    <input className='bg-gray-100 py-2 px-4 rounded font-light ' type='text' placeholder='Username' value={UserName} onChange={(e)=>setUserName(e.target.value)} name='username'/>
                    <input className='bg-gray-100  py-2 px-4 rounded font-light ' placeholder='Password' type='password' value={PassWord} onChange={(e)=>setPassWord(e.target.value) } name='password'/>

                      {
                        props.SignUpformUse &&
                            <>
                                <label htmlFor="">Re Password</label>
                                <input className='bg-gray-200' type='password'value={RePassWord} onChange={(e)=>setRePassWord(e.target.value)} name='Re_password'/><br />

                            </>
                        }
                        

                        <h6 className='underline hover:no-underline text-gray-500 font-light text-[0.9rem]'> Forget Password/Username</h6>

                      <Link to={Entry_Link} className='bg-purple-500  rounded-full py-1  text-white shadow-lg shadow-purple-500/50 '> <button  type='submit'>Login</button></Link>
                    
                      <Link to={props.Links}> <button className='text-gray-400 hover:text-gray-600'>{props.EntryWayMessage}</button></Link>
                </form>
            </div>

        </div>
     </div>
    </>
  )
}
