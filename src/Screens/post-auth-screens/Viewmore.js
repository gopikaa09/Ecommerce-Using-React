

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Viewmore() {
    const {id}=useParams()

    const[product,setViewmore]=useState(null)

    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${id}`)
        .then((response)=>{
          setViewmore(response.data)
        })
        .catch((error)=>{
          console.log(error);
        })
    },[id])
  return (
    <div>
    {product ? (
      <div>
        <h2>You selected product whose id is {id}</h2>
        <p>Title: {product.title}</p>
        <p>Price: ₹{product.price}</p>
      </div>
    ) : (
      <p>Loading...</p>
    )}
  </div>
  )
}    

export default Viewmore







