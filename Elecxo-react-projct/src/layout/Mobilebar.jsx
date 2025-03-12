import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Mobilebar() {
  return (
    <div className='flex lg:hidden bg-gray-300 justify-between fixed bottom-0 w-full px-8 py-4'>
<div className='lg:flex  items-center justify-center bg-gray-300 text-xl w-10 h-10'>
          <FontAwesomeIcon icon={faHouse} />
        </div>
         <div className=' lg:flex items-center justify-center bg-gray-300 text-xl w-10 h-10'>
                  <FontAwesomeIcon icon={faUser} />
                </div>
             <div className='flex items-center justify-center bg-gray-300 text-xl w-10 h-10 mr-5 relative'>
                        <FontAwesomeIcon icon={faCartShopping} />  </div>
    </div>
  )
}

export default Mobilebar