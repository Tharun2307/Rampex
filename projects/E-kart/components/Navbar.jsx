import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='sticky top-0 bg-white shadow-md'>
        <div className='flex justify-between items-center px-6 py-4'>
        <Link to="/" className='text-2xl font-bold text-grey-800'>MITKart</Link>
            <div className=' flex items-center gap-6'>
                <Link to="/cart" className=' text-gray-600 hover-text-'
            </div>
            </div>
    </nav>
  )
}

export default Navbar
