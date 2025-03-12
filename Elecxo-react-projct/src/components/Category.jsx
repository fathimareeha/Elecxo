import React from 'react'
import catogary from '../assets/data/category'
import { Link } from 'react-router-dom'

function Category() {
  return (
    <div  className='flex gap-10 overflow-x-scroll py-5'>{catogary.map(items=>(
        <Link to={`/product/${items.name}`} className='flex items-center border px-4 py-1 relative rounded-lg'><h1>{items.name}</h1>
        <img src={items.image} className='absolute -right-9' alt="" width={50} height={30}/></Link>

    ))}</div>
  )
}

export default Category