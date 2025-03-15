import React from 'react'
import { useCart } from '../context/Cartcontext'
import { Link } from 'react-router-dom'
import Productdetails from '../pages/Productdetails'

function Horizontalcard({product}) {
const {addToCart}=useCart()

  return (
    <div className='border grid grid-cols-1 xl:grid-cols-3 align-middle '>
       
        <div>
        <img src={product?.image||''} alt="" height={250} width={250} />
        </div>
        <div className='space-y-2 mt-3'>
       <Link to={`/Productdetails/${product.id}`}> <h1 className='font-bold text-3xl'>{product?.name||''}</h1></Link>
       <p className='text-2xl'>${product?.rate||''}</p>
       <p>{product?.description||''}</p>
       </div>
       <div className='mt-7 space-y-2'>
       <button onClick={()=>addToCart(product)} className='bg-blue-200 py-2 px-5'>Add to cart</button><br />
       <button className='bg-red-300 py-2 px-7 '>Buy Now</button>
       
       </div>
      
        </div>
  )
}

export default Horizontalcard