import React from 'react'

function Navbar() {
  return (
    <nav className='w-full flex justify-between bg-white z-50 fixed items-center px-20 h-[12vh] text-black'>
         <h1 className='font-[600] text-xl'>AD</h1>
         <h3 className='uppercase font-medium text-sm'>Available For Full Time</h3>
         <button className='bg-black px-9 py-2 text-white'>Time</button>
    </nav>
  )
}

export default Navbar