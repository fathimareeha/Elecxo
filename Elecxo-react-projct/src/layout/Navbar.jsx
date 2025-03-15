import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Searchbar from '../components/Searchbar';
import CartDrawer from '../components/Drawerright';
import { useCart } from '../context/Cartcontext';
import { Link } from 'react-router-dom';
import Profiletag from '../components/Profiletag';

function Navbar() {
  const [search, setSearch] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const { cartitem } = useCart();
  const [show,setShow]=useState(false)

  const profileRef = useRef(null);

   // Click outside detection for ProfileTab
   useEffect(() => {
    function handleClickOutside(event) {
        if (profileRef.current && !profileRef.current.contains(event.target)) {
            setShow(false);
        }
    }
    if (show) {
        document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
}, [show]);

  return (
    <>
      <div className='flex items-center space-x-3 sticky top-0 z-10 bg-white py-5'>
        {/* Logo */}
        <Link to={'/'} className='text-2xl md:text-3xl font-bold ml-10'>
          <span className='text-blue-500'>Elec</span>xo
        </Link>

        {/* Home Icon (Hidden on small screens, visible on lg screens) */}
        <div className='hidden lg:flex items-center justify-center bg-gray-300 text-xl w-10 h-10'>
          <FontAwesomeIcon icon={faHouse} />
        </div>

        {/* Search Bar */}
        <div className='w-full relative'>
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowDropdown(true);
            }}
            type='text'
            placeholder='Search your Item'
            className='border border-b-gray-300 px-4 py-3 w-full'
          />
          {showDropdown && (
            <div className='absolute top-full left-0 w-full bg-white shadow-lg rounded-lg z-10'>
              <Searchbar
                search={search}
                setSearch={setSearch}
                setShowDropdown={setShowDropdown}
              />
            </div>
          )}
        </div>

        {/* User Icon (Hidden on small screens, visible on lg screens) */}
        <div className="hidden lg:flex relative items-center justify-center bg-gray-300 text-xl w-10 h-10 ">
  <button onClick={() => setShow((prev) => !prev)} className="flex items-center justify-center w-full h-full">
    <FontAwesomeIcon icon={faUser} />
  </button>
  <div className="absolute -left-8 top-15">
    <Profiletag show={show} setShow={setShow} />
  </div>
</div>


        {/* Cart Icon */}
        <button
          onClick={() => {
            setShowCart(true);
          }}
          className='hidden lg:flex items-center justify-center bg-gray-300 text-xl w-10 h-10 mr-5 relative'
        >
          <FontAwesomeIcon icon={faCartShopping} />
          <div className='bg-blue-500 px-2 rounded-full absolute -top-2 -right-2 text-sm'>
            {cartitem.length}
          </div>
        </button>
      </div>

      {/* Cart Drawer */}
      <CartDrawer isOpen={showCart} onClose={() => setShowCart(false)} />
    </>
  );
}

export default Navbar;