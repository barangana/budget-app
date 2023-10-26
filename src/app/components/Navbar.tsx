import Link from 'next/link'
import React from 'react'



const Navbar = () => {
  return (
    <div className='border-b border-gray-200 bg-white/75'>
      <div className='flex justify-between'>
        <Link href='/'>Home</Link>
        <div className='space-x-4'>
          <Link href='/login'>Login</Link>
          <Link href='/register'>Register</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
