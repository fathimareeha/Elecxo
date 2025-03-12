import React from 'react';
import { useCart } from '../context/Cartcontext';

function Checkout() {
  const { cartitem, removefromcart, increasequantity, decreasequantity, totalprice } = useCart();
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 p-4'>
      {/* Shipping Information */}
      <div className='space-y-5 p-6 border rounded-lg shadow-sm'>
        <h1 className='font-bold text-2xl'>Checkout</h1>
        <h2 className='text-lg font-semibold'>Shipping Information</h2>
        
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Checkbox 1 */}
          <label className="flex items-center border-2 border-gray-500 rounded-md px-4 py-2 cursor-pointer">
            <input type="checkbox" className="hidden" />
            <span className="w-4 h-4 border-2 border-gray-500 rounded-md mr-2 checked:bg-blue-500" /> Delivery
          </label>
          {/* Checkbox 2 */}
          <label className="flex items-center border-2 border-gray-500 rounded-md px-4 py-2 cursor-pointer">
            <input type="checkbox" className="hidden" />
            <span className="w-4 h-4 border-2 border-gray-500 rounded-md mr-2 checked:bg-blue-500" /> Pick up
          </label>
        </div>

        <input type='text' placeholder='Full Name' className='border px-4 py-2 w-full rounded-md' required />
        <input type='email' placeholder='Email Address' className='border px-4 py-2 w-full rounded-md' required />
        <input type='number' placeholder='Phone Number' className='border px-4 py-2 w-full rounded-md' required />
        
        <label>Choose Country:</label>
        <select name="country" className='border px-4 py-2 w-full rounded-md'>
          <option value="india">India</option>
          <option value="uae">UAE</option>
          <option value="australia">Australia</option>
          <option value="china">China</option>
        </select>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
          <input type='text' placeholder='City' className='border px-4 py-2 rounded-md' />
          <input type='text' placeholder='State' className='border px-4 py-2 rounded-md' />
          <input type='text' placeholder='Zip Code' className='border px-4 py-2 rounded-md' />
        </div>
        
        <label className='flex items-center space-x-2'>
          <input type="checkbox" className='w-4 h-4' />
          <span>I agree to the Terms and Conditions</span>
        </label>
      </div>
      
      {/* Cart Review */}
      <div className='space-y-5 p-6 border rounded-lg shadow-sm bg-blue-50 w-full'>
        <h1 className='font-bold text-lg'>Review your cart</h1>
        <div className='space-y-4'>
          {cartitem.map(items => (
            <div key={items.id} className='flex items-center gap-4'>
              <img src={items.image} className='w-20 h-20 border rounded-lg object-cover' alt={items.name} />
              <div>
                <p className='font-semibold'>{items.name}</p>
                <p className='text-gray-700'>${items.rate}</p>
                <p className='text-gray-500'>Qty: {items.quantity}</p>
              </div>
            </div>
          ))}
        </div>
        <input type="text" placeholder='Discount Code' className='border px-4 py-2 w-full rounded-md' />
        <div className='text-lg font-semibold'>
          <p>Subtotal</p>
          <p>Shipping</p>
          <p>Discount</p>
          <h2>Total: ${totalprice()}</h2>
        </div>
        <button className='w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700'>Pay Now</button>
      </div>
    </div>
  );
}

export default Checkout;