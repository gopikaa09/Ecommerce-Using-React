

import React from 'react'
import Registercompo from '../../Components/Registercompo'
import { useNavigate } from 'react-router-dom'

function Register() {
  const navigate=useNavigate()
  return (
    <div>
      <button onClick={()=>navigate("/")} >Click to login</button>
      <Registercompo/>
    </div>
  )
}

export default Register
