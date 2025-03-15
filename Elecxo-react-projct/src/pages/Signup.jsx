import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedinIn, faGoogle } from '@fortawesome/free-brands-svg-icons'
import Button from '../components/Button'
import { useAuth } from '../context/Authcontext'

function Signup() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate()


  const handleSignup = (e) => {
    e.preventDefault();
    signup(name, password); 
     // Fix argument order
    navigate('/')
  };

  return (
    <div>
      <div className='grid grid-cols-1 lg:grid-cols-2 border rounded-2xl w-full lg:w-250 h-150 mx-auto mt-10'>
        {/* Left Image Section */}
        <div className='rounded-l-2xl hidden lg:block bg-[url(https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D)] bg-cover'>
          <div className='mt-10 ml-15 text-black space-y-5'>
            <h2 className='text-3xl font-bold'><span className='text-blue-500'>Elec</span>xo</h2>
            <h1 className='text-6xl font-bold'><span className='text-blue-500'>Sign</span>Up</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptas consequatur blanditiis eligendi doloribus temporibus.</p>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="flex items-center justify-center">
          <form className='space-y-5' onSubmit={handleSignup}>
            <input 
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder='username'
              className='px-10 py-3 bg-gray-200'
            /><br />
            <input 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder='password'
              className='px-10 py-3 bg-gray-200'
            /><br />
            
            <div>
              <Button label={'Sign Up'} primary={true} />
            </div>

            <p className='ml-35 text-gray-500'>
              <Link to='/forgot-password'>Forget password?</Link>
            </p>

            <p className='w-fit mx-auto space-x-3 text-2xl '>
              <FontAwesomeIcon icon={faFacebook} className='bg-gray-300 p-2'/>
              <FontAwesomeIcon icon={faLinkedinIn} className='bg-gray-300 p-2'/>
              <FontAwesomeIcon icon={faGoogle} className='bg-gray-300 p-2'/>
            </p>

            <div>
              <p className='text-center'>OR</p>
            </div>

            <p className='text-center text-gray-500'>
              <Link to='/login'>Already Have an Account?</Link>
            </p>

            <div>
              <Link to='/'>
                <Button label={'Login'} primary={false} />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup;
