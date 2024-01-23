'use client'

import React, { useState } from 'react'
import { Button } from '../ui/button'
import { trpc } from '../../_trpc/client'

interface RegisterInfo {
  email: string
  password: string
}

const RegisterForm = () => {
  const [user, setUser] = useState<RegisterInfo>({
    email: '',
    password: '',
  })

  const registerUser = trpc.register.useMutation()

  return (
    <div className='grid place-items-center h-screen'>
      <div className='p-24 rounded-lg bg-gray-900/5 ring-1 ring-inset ring-gray-900/10'>
        <form>
          <div className='flex flex-col items-center'>
            <header className='pb-8 font-bold text-4xl'>budgeto.</header>
            <input
              className='rounded-lg px-12 py-2'
              placeholder='username'
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <input
              className='rounded-lg px-12 py-2 my-4'
              placeholder='password'
              type='password'
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <input
              className='rounded-lg px-12 py-2'
              placeholder='confirm password'
              type='password'
            />
          </div>
        </form>
        <Button
          className='container mt-4'
          onClick={async () => registerUser.mutate(user)}
        >
          register
        </Button>
      </div>
    </div>
  )
}

export default RegisterForm
