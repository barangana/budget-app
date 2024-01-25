'use client'

import React from 'react'
import { Button } from '../ui/button'
import { signIn, useSession } from 'next-auth/react'
import { trpc } from '../../_trpc/client'

// is it necessary to have components if the forms are only used on the login pages?
// TODO: Add the multiple providers button

interface LoginInfo {
  username: string
  password: string
}

const LoginForm = () => {
  const { data: session } = useSession()
  console.log(session)

  const storeUser = trpc.register.useMutation()

  const handleLogin = () => {
    signIn('google')
    storeUser.mutate({ email: session?.user?.email, password: '' })
  }

  return (
    <div className='grid place-items-center h-screen'>
      <div className='p-24 rounded-lg bg-gray-900/5 ring-1 ring-inset ring-gray-900/10'>
        <form>
          <div className='flex flex-col items-center'>
            <header className='pb-8 font-bold text-4xl'>budgeto.</header>
            <input
              className='rounded-lg  px-12 py-2 my-4'
              placeholder='username'
            />
            <input className='rounded-lg  px-12 py-2' placeholder='password' />

            <p>No account? Sign up</p>
          </div>
        </form>
        <Button className='container mt-4'>login</Button>
        <Button className='container mt-4' onClick={() => handleLogin()}>
          sign in with google
        </Button>
      </div>
    </div>
  )
}

export default LoginForm
