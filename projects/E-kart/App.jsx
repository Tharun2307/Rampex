import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from './pages/Product'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Product/>}/>
      <Route path='/:id' element={<ProductDetail/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
  )
}

export default App
