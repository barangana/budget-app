import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Card from './Card'

//TODO: Add dynamic data such as name, balance and pass the props to card.

const Dashboard = () => {
  return (
    <MaxWidthWrapper>
      <div className='py-8'>
        <div>Hi, name</div>
        <div>Balance</div>
      </div>
      <div className='py-8 bg-red-500'>FILTERS</div>
      <div className='float-right'>Total Value: amount</div>
      <Card title='test' amount={0} tag='test tag' category='test category' />
      <Card title='test' amount={0} tag='test tag' category='test category' />
      <Card title='test' amount={0} tag='test tag' category='test category' />
      <Card title='test' amount={0} tag='test tag' category='test category' />
    </MaxWidthWrapper>
  )
}

export default Dashboard
