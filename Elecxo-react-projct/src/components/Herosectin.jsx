import React from 'react'
import electronicProducts from '../assets/data/products'
import { CarouselDefault } from './Carousel'

function Herosectin() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-5 items-center '>
       
        <div className='grid grid-cols-1 gap-5 ml-5'>
        {electronicProducts.slice(2,4).map(items=>(
            <div className='lg:flex flex-wrap border w-[170px]  justify-center hidden '>
                <div className=' w-full py-3 ' >
                <img src={items.image} alt="" height={100} width={100} className='mx-auto'/></div>
                <h1 className='bg-black w-full text-center text-white'>{items.name}</h1>
                </div>
        ))}
    </div>
        
  
    <div className='col-span-4 '>
        <CarouselDefault/>
    </div>
    </div>
  )
}

export default Herosectin