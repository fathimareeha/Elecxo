import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedinIn, faGoogle } from '@fortawesome/free-brands-svg-icons'
import Button from '../components/Button'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'


function Signup() {
  return (
    <div>
        
       <div className='grid grid-cols-1 lg:grid-cols-2  border rounded-2xl w-full lg:w-250 h-150 mx-auto mt-10'>
        <div className='rounded-l-2xl hidden lg:block bg-[url(https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D)] bg-cover'>
        <div className='mt-10 ml-15 text-black space-y-5'>
        <h2 className='text-3xl font-bold'><span className='text-blue-500'>Elec</span>xo</h2>
        <h1 className='text-6xl font-bold'><span className='text-blue-500'>Sign</span>Up</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptas consequatur blanditiis eligendi doloribus temporibus.</p>
        </div>
        </div>
        <div className="flex items-center justify-center">
        <form className='space-y-5'>
            <input type="text" placeholder='username' className=' px-10 py-3 bg-gray-200'/><br />
            <input type="password" placeholder='password' className='px-10 py-3  bg-gray-200' /><br />
            <div>
              <Button label={'Sign Up'} primary={true}/>
            </div>

            <p className='ml-35 text-gray-500' ><Link>forget password?</Link></p>
            <p className='w-fit mx-auto space-x-3 text-2xl '>
            <FontAwesomeIcon icon={faFacebook} className='bg-gray-300 p-2'/>
            <FontAwesomeIcon icon={faLinkedinIn} className='bg-gray-300 p-2'/>
            <FontAwesomeIcon icon={ faGoogle} className='bg-gray-300 p-2'/>
            </p>
            <div className=''>
           <p className='text-center'>OR</p>
            </div>
            <p className='text-center text-gray-500'><Link>Already Have an Account?</Link></p>
            <div >

            <Link to={'/'}>
            <Button label={'Login'} primary={false} />
            </Link>
            </div>

        </form>
        </div>
      </div> 
    
    </div>
  )
}

export default Signup