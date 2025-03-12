import React from 'react'
import electronicProducts from '../assets/data/products'
import Card2 from './Card2'

function Headphones() {

    const headphones=electronicProducts.filter(items=>items.category==="Headphones")
  return (
    <div ><h1 className='mt-10 text-2xl font-bold text-gray-400'>Headphones</h1>
    <div className='flex overflow-y-auto'>
      {headphones.map(items=>(<div>
        <Card2 image={items.image} description={items.description} price={items.rate}/>
</div>
      ))}

    </div>
        
    </div>
  )
}

export default Headphones