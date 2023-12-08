import React from 'react'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <>
      <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'>
        <p className='text-sm font-semibold text-gray-700'>
          Budgeto is currently private
        </p>
      </div>
      <h1 className='max-w-6xl text-5xl font-bold md:text-6xl lg:text-7xl mb-6'>
        Track your <span className='text-blue-600'>budget & expenses</span> in
        seconds.
      </h1>
      <p className='mt-5 max-w-prose text-zinc-700 sm:text-lg'>
        Budgeto allows you to consolidate all your spreadsheet budgeting into
        one page. Simply start by adding your expenses and start tracking right
        away.
      </p>
      <Button className='mt-5'>Start budgeting for free</Button>
    </>
  )
}

export default Hero
