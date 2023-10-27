import Link from 'next/link'
import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'

const Navbar = () => {
  return (
    <nav className='h-14 border-b border-gray-200 bg-white/75'>
      <MaxWidthWrapper>
        <div className='flex h-14 justify-between items-center '>
          <Link href='/'>budgeto.</Link>
          <div className='space-x-4'>
            <Link href='/login'>Login</Link>
            <Link href='/register'>Register</Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
