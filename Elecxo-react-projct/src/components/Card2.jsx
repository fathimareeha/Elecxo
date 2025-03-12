import React from 'react'

function Card2({image,description,price,name}) {
  return (
    <div className='h-70 w-70 space-y-6 grid grid-cols-1'>
        <div className='h-25'>
       <img src={image} alt="" height={130} width={130} className='mx-auto mt-5'/></div>
       
       <div className='px-3 py-2 '>
       <p className='text-center font-bold'>{name}</p>
      
       <p className='line-clamp-3'>{description}</p>
       <p className='font-bold'>${price}</p>
       <p className='line-through'>Rs 1500</p></div>
      
    </div>
  )
}

export default Card2