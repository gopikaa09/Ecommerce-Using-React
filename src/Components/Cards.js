
import axios from 'axios'
import React, {  useEffect, useState } from 'react'
import style from './cards.module.css'
import { Link, useNavigate } from 'react-router-dom'

function Cards() {

  const [cart,Setcart]=useState([]);
  const navigate=useNavigate();
  const AddTocart=async (item)=>{
    try{
      Setcart((preCart)=>[...preCart,item]);
      await axios.post('http://localhost:5000/cart',{
        cart:[...cart,item],
        
      })
      // navigate('/cart')
    }catch(error){
      console.log(error);
    }
    // console.log(cart.length);
    // if(cart.length===0){
    //   Setcart([item])
    // }else{
    //   Setcart((preCart)=>[...preCart,item])
    // }
    
    // navigate("/cart")
    // console.log(cart);
  }
    const[products,setProducts]=useState([])
    useEffect(()=>{
        axios.get("https://dummyjson.com/products")
        .then((response)=>{
            let products_data=response.data.products
            // console.log(products_data);
            products_data.forEach((val)=>{
                // console.log(val);
            })
            setProducts(products_data)
            
        })
    },[])


    useEffect(()=>{
      axios.get("https://fakestoreapi.com/carts")
      .then((a)=>{
        console.log(a.data);
      }).catch((b)=>{
        console.log(b);
      })
    },[])

  return (
    <div className={style.Cards}>
      {
        products.map((val)=>{
            return(
                <div className={style.InnerCards}>
                <img src={val.images[0]}></img>
                <p>{val.title}</p>
                <Link to={`/products/${val.id}`}>See more..</Link>
                <div>
                <p>₹{val.price}</p>
                <button onClick={()=>AddTocart(val)}>Add to cart</button></div>
                </div>
            )
        })
      }
     
    </div>
  )
}

export default Cards
