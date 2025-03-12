import React from 'react'
import electronicProducts from '../assets/data/products'
import Card2 from './Card2'

function Relatedprdcts() {
  return (
    <div ><h1 className='mt-10 text-2xl font-bold text-gray-400'>Related products</h1>
    <div className='flex overflow-x-scroll'>
      {electronicProducts.map(items=>(<div>
        <Card2 image={items.image} description={items.description} price={items.rate}/>
</div>
      ))}

    </div>
        
    </div>
  )
}

export default Relatedprdcts