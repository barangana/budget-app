import React from 'react'
import Dashboard from './components/Dashboard'
import MaxWidthWrapper from './components/MaxWidthWrapper'

const Home = () => {
  return (
    <MaxWidthWrapper>
      <h1 className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
        buydgeto
      </h1>
      <p className='mt-5 max-w-prose text-zinc-700 sm:text-lg'></p>
    </MaxWidthWrapper>
  )
}

export default Home
