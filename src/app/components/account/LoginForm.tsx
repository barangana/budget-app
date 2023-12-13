import React from 'react'

// login takes in a username and password (temporarily)
// todo: add google provider and other providers
// might remove email/password

interface LoginInfo {
  username: string
  password: string
}

const LoginForm = () => {
  return (
    <div>
      <div className='grid place-items-center h-screen'>
        <div className='border-solid border-2 border-black p-24'>
          <form className=''>
            <div className='flex flex-col items-center'>
              <header className='pb-8 font-normal text-4xl'>budgeto</header>
              <label>username</label>

              <label>password</label>

              <p>message</p>
              <div className='flex justify-between w-44 pt-6 pb-12'>
                <button>login</button>
                <button>register</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
