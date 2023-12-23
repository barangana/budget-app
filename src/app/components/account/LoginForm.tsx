import React from 'react'
import { Button } from '../ui/button'

// login takes in a username and password (temporarily)
// todo: add google provider and other providers
// might remove email/password

interface LoginInfo {
  username: string
  password: string
}

const LoginForm = () => {
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
            <Button className='container mt-4'>login</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
