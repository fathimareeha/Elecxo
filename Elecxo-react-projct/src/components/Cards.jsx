import React from 'react';
import { useCart } from '../context/Cartcontext';

function Cards({ product }) {
  const { addToCart } = useCart();

  return (
    <div className='border h-auto w-full sm:w-60 lg:w-70 space-y-3 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'>
      {/* Product Image */}
      <div className='h-32 flex items-center justify-center'> {/* Reduced height */}
        <img
          src={product.image}
          alt={product.name}
          height={100} 
          width={100}
          className='object-contain mx-auto'
        />
      </div>

      {/* Product Details */}
      <div className='space-y-1'> {/* Reduced spacing */}
        <p className='text-center font-bold text-md'>{product.name}</p> {/* Smaller font size */}
        <p className='line-clamp-2 text-sm text-gray-600'>{product.description}</p> {/* Reduced line clamp */}
        <p className='font-bold text-blue-600'>${product.rate}</p>
        <p className='line-through text-xs text-gray-500'>Rs 1500</p> {/* Smaller font size */}
        <button
          onClick={() => addToCart(product)}
          className='w-full bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition-colors duration-300 text-sm' 
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Cards;