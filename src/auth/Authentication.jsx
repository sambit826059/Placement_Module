import React, { useState,useEffect, useContext } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ContextUserType from '../Contexts/ContextUserType';

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
      if(UserName==='soumen' && PassWord==='102'){
        setEntry_Link('/Student');

      }
      else if(UserName==='sambit'&& PassWord==='42'){
        setEntry_Link('/Student');
      }
      else{
        setEntry_Link('');
      }
    } 
    else if (selectedUserType === 'HR') {
      setEntry_Link('/HR');

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
    
     <div className='p-12 py-[5rem] border-2 border-black rounded-xl bg-white '>
       <h1 className={`  ${selectedUserType ? 'text-green-400': 'text-white'}`}>hello {selectedUserType} </h1> 

        Welcome
          <br />
          <label htmlFor="dropdown">User type:</label>
          <select id="dropdown" name="dropdown"value={selectedValue} onChange={(e)=>setSelectedValue(e.target.value)}>
             <option value="NormalUser">Not Selected</option>
            <option value="Student">Student</option>
            <option value="HR">HR</option>
            <option value="Admin">Admin</option>
        </select>

                
            <form action="/signup" method="post" onSubmit={HandleFormSubmit}>
                <label htmlFor="">Username</label><br/>
                <input className='bg-gray-200' type='text' value={UserName} onChange={(e)=>setUserName(e.target.value)} name='username'/>
                <br />
                <label htmlFor="">Password</label><br/>
                <input className='bg-gray-200' type='password' value={PassWord} onChange={(e)=>setPassWord(e.target.value) } name='password'/><br />

       {
        props.SignUpformUse &&
            <>
                <label htmlFor="">Re Password</label><br/> 
                <input className='bg-gray-200' type='password'value={RePassWord} onChange={(e)=>setRePassWord(e.target.value)} name='Re_password'/><br />

            </>
        }
                <Link to={Entry_Link}> <button className='bg-gray-200 p-4 mt-2' type='submit'>Submit</button></Link>
           
            <h6> {props.EntryWayMessage} </h6>
            <Link to={props.Links}> <button className='p-4'>{props.LinkButtonName}</button></Link>
            </form>
        </div>
    </>
  )
}
