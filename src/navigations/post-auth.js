


import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Screens/post-auth-screens/Home'
import Addtocart from '../Screens/post-auth-screens/Addtocart'
import Orderplaced from '../Screens/post-auth-screens/Orderplaced'
import Viewmore from '../Screens/post-auth-screens/Viewmore'

function PostAuthNav() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Addtocart/>}/>
      <Route path='/orderplaced' element={<Orderplaced/>}/>
      <Route path='/products/:id' element={<Viewmore/>}/>
    </Routes>
  )
}

export default PostAuthNav
