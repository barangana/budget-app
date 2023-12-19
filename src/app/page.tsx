import React from 'react'
import MaxWidthWrapper from './components/MaxWidthWrapper'
import Hero from './components/Hero'
import Image from 'next/image'

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
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
