import React from 'react'

const Cart = () => {
  return (
    <div className=' py-10 px-6 '>
        <h1 className=' text-2xl font-bold mb-6'>Your Cart</h1>
      <div className=' space-y-4'>
        <div className='flex justify-between items-center bg-orange-400 p-4 rounded-md shadow'></div>
        <h2 className='font-semibold'>Title</h2>
        <p className=' text-indigo-400 font-bold'>Price</p>

      </div>
    </div>
  )
}

export default Cart
