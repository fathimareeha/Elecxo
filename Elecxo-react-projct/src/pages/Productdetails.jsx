import React from 'react'
import Rating from '../components/rating/Ratingdsgn'
import { useParams } from 'react-router-dom'
import electronicProducts from '../assets/data/products'
import Cards from '../components/Cards'

function Productdetails() {
const {id}=useParams()
const product=electronicProducts.find(item=>item.id==id)
const similarproducts=electronicProducts.filter(item=>item.brand===product.brand)

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className='justify-center items-center flex'>
       
        <img src={product?.image} alt="" height={300} width={300} />
        
        </div>

        <div className='space-y-6'>
   
        <h1 className='text-3xl font-bold'> {product.name}</h1>
            <p><Rating/></p>
            <p className='font-bold'>${product.rate}</p>
            <p>The Apple Watch Series 7 features a larger, more durable display, advanced health monitoring, and fast charging.</p>
            <button className='bg-black hover:bg-amber-700 hover:text-red-600 text-white px-5 py-2'>Add to cart</button>
        </div>
        <div>
<h1 className='font-bold text-2xl mb-5 mt-10'>Similar Products</h1><div className='flex space-x-5 flex-col xl:flex-row  gap-10 items-center'>
{similarproducts.map(item=>(<div >
  <Cards product={item}/>
  </div>
  
))}
</div>

</div>

    </div>
  )
}

export default Productdetails