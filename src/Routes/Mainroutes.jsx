import React from 'react'
import {Route, Routes} from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import ItemPage from '../Pages/ItemPage'
import LandingPage from '../Pages/LandingPage'
import Sign_In from '../Pages/SignIn/Sign_In'
import Sign_Up from '../Pages/SignIn/Sign_Up'

const Mainroutes = () => {
  return (
    
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/home' element={<HomePage/>} />
      <Route path='/item/:id' element={<ItemPage/>} />
      <Route path='/signup' element={<Sign_Up />} />
      <Route path='/login' element={<Sign_In />} />
    </Routes>
  )
}

export default Mainroutes
