import React from 'react'
import MaxWidthWrapper from './components/MaxWidthWrapper'
import Form from './components/Form'
import Hero from './components/Hero'

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
    </>
  )
}

export default Home
