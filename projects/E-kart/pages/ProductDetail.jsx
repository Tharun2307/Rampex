import React from 'react'

const ProductDetail = () => {
  return (
    <div className=' px-6 py-12 grid md:grid-cols-2 gap-10'>
        {/* image */}
        <div className='bg-gray-100 rounded-xl flex justify-center items-center'>
            <img src="" alt="" />
        </div>
        {/* Details  */}
        <div>
            <h1 className='text-3xl '>
               Title
            </h1>
            <p className='text-gray-500 mt-4'>Description</p>
            <p className=' text-2xl font-bold text-indigo-500 mt-6'>Price</p>
            <button className='mt-6 bg-green-500 py-3 px-6 rounded-l'>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductDetail
