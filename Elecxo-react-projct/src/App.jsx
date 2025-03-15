import { useState } from 'react'

import './App.css'
import { Route,Router, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './layout/Navbar'
import Layout from './layout/Layout'
import Homepage from './pages/Homepage'
import Productlist from './pages/Productlist'
import { ToastContainer, toast } from 'react-toastify';
import Productdetails from './pages/Productdetails'
import Checkout from './pages/Checkout'
import Protectroute from './components/protectroute'


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
   <ToastContainer/>
    <Routes>
      <Route element={<Layout/>}>
      <Route path='/' element={<Homepage/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/signup' element={<Signup/>}></Route>
       <Route element={<Protectroute/>}>
       <Route path='/checkout' element={<Checkout/>}></Route>
       </Route>
       <Route path='/product/:category' element={<Productlist/>}></Route>
       <Route path='/productdetails/:id' element={<Productdetails/>}></Route>
       </Route>

    </Routes>
    </>
    
  )
}

export default App
