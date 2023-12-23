'use client'

import Link from 'next/link'
import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { signOut, useSession } from 'next-auth/react'

const Navbar = () => {
  const { data: session, status } = useSession()

  return (
    <nav className='h-14 border-b border-gray-200 bg-white/75'>
      <MaxWidthWrapper>
        <div className='flex h-14 justify-between items-center '>
          <Link href='/'>budgeto.</Link>
          {status === 'authenticated' ? (
            <div className='space-x-4'>
              <Link href='/dashboard'>dashboard</Link>
              <button onClick={() => signOut()}>sign out</button>
            </div>
          ) : (
            <div className='space-x-4'>
              <Link href='/login'>Login</Link>
              <Link href='/register'>Register</Link>
            </div>
          )}
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
