import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/Authcontext'

function Profiletag({show,setShow}) {
  const {user,logout}=useAuth()
  console.log(user);
  
  return (
   <div className={`bg-white px-5 py-2 shadow ${show? 'block':'hidden'}`}>

    {user? <Link to={'/login'}><button onClick={()=>logout()} className='border bg-red-600 text-white px-3 py-2'>Logout</button></Link> : 
    <Link to={'/login'}><button className='border bg-blue-600 text-white px-3 py-2'>Login</button> </Link>}
      
    
      
    
      </div>
  )
}

export default Profiletag