import React from 'react'
import MaxWidthWrapper from './components/MaxWidthWrapper'
import Hero from './components/Hero'
import Image from 'next/image'
import Link from 'next/link'

{
  /* placeholder image, to replace with actual dashboard */
}

const Home = () => {
  return (
    <>
      <MaxWidthWrapper
        extraClassName={
          'mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'
        }
      >
        <Hero />
      </MaxWidthWrapper>
      <div>
        <div className='relative isolate'>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          ></div>
          <div>
            <div className='mx-auto max-w-6xl px-6 lg:px-8'>
              <div className='mt-16 flow-root sm:mt-24'>
                <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                  <Image
                    src='/test.jpg'
                    alt='product preview'
                    width={1364}
                    height={866}
                    quality={100}
                    className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
          ></div>
        </div>
      </div>
      <div className='mx-auto mb-32 mt-32 max-w-5xl sm:mt-56'>
        <div className='mb-12 px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl sm:text-center'>
            <h2 className='mt-2 font-bold text-4xl text-gray-900'>
              Start your budgeting instantly
            </h2>
            <p className='mt-4 text-lg text-gray-600'>
              Faster and easier than spreadsheets
            </p>
          </div>
        </div>
        <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-blue-600'>Step 1</span>
              <span className='text-xl font-semibold text-blue-600'>
                Sign up for an account
              </span>
              <span className='mt-2 text-zinc-700'>
                Start with by creating your account
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-blue-600'>Step 2</span>
              <span className='text-xl font-semibold text-blue-600'>
                Insert your budget
              </span>
              <span className='mt-2 text-zinc-700'>
                We&apos;ll save your weekly or monthly budget and reset it every
                cycle.
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-blue-600'>Step 3</span>
              <span className='text-xl font-semibold text-blue-600'>
                Start tracking your expenditures
              </span>
              <span className='mt-2 text-zinc-700'>
                It&apos;s that easy. We will begin tracking your spending to
                help you budget.
              </span>
            </div>
          </li>
        </ol>
      </div>
    </>
  )
}

export default Home
