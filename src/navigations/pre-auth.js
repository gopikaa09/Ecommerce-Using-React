

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from '../Screens/pre-auth_screens/Register'
import Login from '../Screens/pre-auth_screens/Login'

function PreauthNav() {
  return (
    <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path='/' element={<Login/>}/>
    </Routes>
  )
}

export default PreauthNav
