import React from 'react'
import './InappLoader.css'

export default function InappLoader() {
  return (
    <>
    <div className='centered dark:bg-slate-400'>
        <div className="lds-ellipsis ">
            <div className='dark:bg-slate-900'></div>
            <div className='dark:bg-slate-900'></div>
            <div className='dark:bg-slate-900'></div>
            <div className='dark:bg-slate-900'></div>
        </div>
    </div>
    </>
  )
}
