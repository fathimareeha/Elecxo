import React from 'react'
import Card2 from './Card2'
import electronicProducts from '../assets/data/products'

function Televisions() {
    const Televisions = electronicProducts.filter(items => items.category === "Televisions");
  return (
    <div ><h1 className='mt-10 text-2xl font-bold text-gray-400'>Televisions</h1>
    <div className='flex overflow-y-auto'>
      {Televisions.map(items=>(<div>
        <Card2 image={items.image} description={items.description} price={items.rate}/>
</div>
      ))}

    </div>
        
    </div>
  )
}

export default Televisions