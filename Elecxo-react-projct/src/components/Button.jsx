
import React from 'react'

function Button({label,primary}) {
  return (
    <div className='w-fit mx-auto'>

        <button className={`px-5 py-3 rounded-xl ${primary?'bg-blue-500':'bg-gray-400'} `}> {label} </button>
        </div>
  )
}

export default Button