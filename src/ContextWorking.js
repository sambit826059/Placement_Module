import React from 'react'
import ContextUserType from './Contexts/ContextUserType'
import App from './App';
import Authentication from './auth/Authentication';

export default function ContextWorking() {

    const [selectedUserType, setSelectedUserType] = useState('');

  return (
    <>
    <ContextUserType.Provider value={{selectedUserType, setSelectedUserType}}>
        <App/>
        <Authentication/>
    </ContextUserType.Provider>
    </>
  )
}
