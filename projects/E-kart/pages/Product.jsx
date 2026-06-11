import React, { useEffect } from 'react'
import ProductCard from '../components/ProductCard'

const Product = () => {
  const dispatch=useDispatch();
  const {items,loading}=useSelector(state=>state.Product);
  useEffect(()=>{
    
  })
  return (
    <div className=''>
        <h1>Products</h1>
        <div className=' grid grid-cols-3 gap-2 p-6'>
          {items.map(product=>(
            <ProductCard/> key=
            ))}

        </div>
      
    </div>
  )
}

export default Product
