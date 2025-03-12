import React from 'react'
import electronicProducts from '../assets/data/products'
import Cards from './Cards'

function Todaysdeal() {
  return (
    <div ><h1 className='text-3xl font-bold text-gray-500 mt-10 mb-5'>Today's deal</h1>
    <div className='flex flex-col xl:flex-row overflow-x-scroll gap-10 items-center'>
    {electronicProducts.map(items=>(<div>
        <Cards product={items} />
        
        </div>)
)}</div>
    </div>
  )
}

export default Todaysdeal