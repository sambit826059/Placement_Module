import React from 'react'
import './InappLoader.css'

export default function InappLoader() {
  return (
    <>
    <div className='centered'>
        <div className="lds-ellipsis">
            <div></div><div></div><div></div><div></div>
        </div>
    </div>
    </>
  )
}
