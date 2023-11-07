import React from 'react'
import MaxWidthWrapper from './components/MaxWidthWrapper'
import Dashboard from './components/Dashboard'

const Home = () => {
  return (
    <>
      <MaxWidthWrapper
        extraClassName={
          'mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'
        }
      >
        <h1 className=''>buydgeto</h1>
        <p className='mt-5 max-w-prose text-zinc-700 sm:text-lg'>
          welcomes you
        </p>
      </MaxWidthWrapper>
      <Dashboard />
    </>
  )
}

export default Home
