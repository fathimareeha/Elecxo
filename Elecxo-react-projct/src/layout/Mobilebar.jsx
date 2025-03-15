import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../context/Cartcontext';
import CartDrawer from '../components/Drawerright';

function Mobilebar() {
  const { cartitem } = useCart();
  const [showCart,setShowCart]=useState(false)

  return (
    <>
   
    <div className='flex lg:hidden bg-gray-300 justify-between fixed bottom-0 w-full px-8 py-4'>
<div className='lg:flex  items-center justify-center bg-gray-300 text-xl w-10 h-10'>
          <FontAwesomeIcon icon={faHouse} />
        </div>
         <div className=' lg:flex items-center justify-center bg-gray-300 text-xl w-10 h-10'>
                  <FontAwesomeIcon icon={faUser} />
                </div>
            <button
                      onClick={() => {
                        setShowCart(true);
                      }}
                      className='flex items-center justify-center bg-gray-300 text-xl w-10 h-10 mr-5 relative'
                    >
                      <FontAwesomeIcon icon={faCartShopping} />
                      <div className='bg-blue-500 px-2 rounded-full absolute -top-2 -right-2 text-sm'>
                        {cartitem.length}
                      </div>
                    </button>
                   
    </div>
    <CartDrawer isOpen={showCart} onClose={() => setShowCart(false)} className='z-50' />
    
    </>
  )
}

export default Mobilebar