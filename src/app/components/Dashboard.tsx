import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Card from './Card'

const Dashboard = () => {
  return (
    <MaxWidthWrapper>
      hello fake amount
      <Card title='test' amount={0} tag='test tag' category='test category' />
      <Card title='test' amount={0} tag='test tag' category='test category' />
      <Card title='test' amount={0} tag='test tag' category='test category' />
      <Card title='test' amount={0} tag='test tag' category='test category' />
    </MaxWidthWrapper>
  )
}

export default Dashboard
