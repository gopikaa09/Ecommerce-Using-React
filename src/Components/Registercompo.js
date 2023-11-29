
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Registercompo() {

    
    const[fname,setFname]=useState("")
    const[lname,setLname]=useState("")
    const[email,setEmail]=useState("")
    const[pass,setPass]=useState("")
    const[cpass,setCpass]=useState("")


    const[error1,SetError1]=useState(false)
    const[error2,SetError2]=useState(false)
    const[error3,SetError3]=useState(false)
    const[error4,SetError4]=useState(false)
    const[error5,SetError5]=useState(false)

    const loginNavigate=useNavigate()

    const fnameValid=(data)=>{
        // console.log(data.target.value.length);
        let fname_length=data.target.value.length
        setFname(data.target.value)
        if(fname_length>10){
            SetError1(true)
        }else{
            SetError1(false)
        }
    }

    const lnameValid=(data)=>{
        // console.log(data.target.value.length);
        let lname_length=data.target.value.length
        setLname(data.target.value)
        if(lname_length>10){
            SetError2(true)
        }else{
            SetError2(false)
        }
    }
    
    const emailValid=(data)=>{
        let emailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        let b=emailPattern.test(data.target.value)
        setEmail(data.target.value)
        if(b){
            SetError3(false)
        }else{
            SetError3(true)
        }
    }

    const passValid=(data)=>{
        let pass_length=data.target.value.length
        setPass(data.target.value)
        if(pass_length<8){
            SetError4(true)
        }else{
            SetError4(false)
        }
    }

    const passCvalid=(data)=>{
        let cpass=data.target.value
        setCpass(data.target.value)
        if(cpass!==pass){
            SetError5(true)
        }else{
            SetError5(false)
        }
    }
    const FormSubmission = async(e)=>{
        e.preventDefault();
        console.log(
            "Submitted"
        )
        const user={
            FirstName:fname,
            LastName:lname,
            email:email,
            Password:pass,
            ConfirmPass:cpass
        }
        try{
            const response= await axios.post('http://localhost:5000/users',user);
            console.log(user)
            console.log('data added',response.data);
        }catch(error){
            console.log('error',error);
        } 
    }
  return (
    <div>
      <h1>Regsiter Form</h1>
      <form>
        <label htmlFor="FirstName">FirstName</label><br/>
        <input type="text" id="FirstName" required value={fname} onChange={(data)=>fnameValid(data)}/><br/>
        {
            error1 ? <p>The FirstName should be less than 10</p>  : null
        }
        <label htmlFor="LastName">LastName</label><br/>
        <input type="text" id="LastName" required value={lname} onChange={(data)=>lnameValid(data)}/><br/>
        {
            error2 ? <p>The LastName should be less than 10 </p> :null
        }
        <label htmlFor="Email">Email</label><br/>
        <input type="email" id="Email" required value={email} onChange={(data)=>emailValid(data)}/><br/>
        {
            error3 ? <p>Error</p>:null
        }
        <label htmlFor="pass">Password</label><br/>
        <input type="password" id="pass" required value={pass} onChange={(data)=>passValid(data)}/><br/>
        {
            error4 ? <p>Password should be greater than 8</p> :null
        }
        <label htmlFor="cpass">Confirm Password</label><br/>
        <input type="password" id="cpass" required value={cpass} onChange={(data)=>passCvalid(data)}/><br/>{
            error5 ? <p>password is mismatched</p> :null
        }
        <button type='submit'onClick={FormSubmission} >Submit</button>
        </form>
    </div>
  )
}

export default Registercompo
