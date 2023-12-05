import React from 'react'

const Hero = () => {
  return (
    <>
      <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl text-blue-600 mb-6'>
        Budgeto
      </h1>
      <h1 className='max-w-6xl text-5xl font-bold md:text-6xl lg:text-7xl mb-6'>
        Track your <span className='text-blue-600'>budget & expenses</span> in
        seconds.
      </h1>
      <p className='mt-5 max-w-prose text-zinc-700 sm:text-lg'>
        Budgeto allows you to consolidate all your spreadsheet budgeting into
        one page. Simply start by adding your expenses and start tracking right
        away.
      </p>
    </>
  )
}

export default Hero
