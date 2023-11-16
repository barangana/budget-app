'use client'

import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Card from './Card'
import { trpc } from '../_trpc/client'

//TODO: Add dynamic data such as name, balance and pass the props to card.
//TODO: Add skeleton loading
//TODO: Add empty "is empty div"

const Dashboard = () => {
  const { data: expenses, isLoading } = trpc.expenseList.useQuery()

  return (
    <MaxWidthWrapper>
      <div className='py-8'>
        <div>Hi, name</div>
        <div>Balance</div>
      </div>
      <div className='py-8 bg-red-500'>FILTERS</div>
      <div className='float-right'>Total Value: amount</div>

      {expenses && expenses.length !== 0 ? (
        expenses?.map((expense) => (
          <Card
            title={expense.name}
            amount={expense.amount}
            tag='test tag'
            category={expense.category}
            // date={expense.createdAt}
          />
        ))
      ) : isLoading ? (
        <div>hello</div>
      ) : (
        <div>hello</div>
      )}
    </MaxWidthWrapper>
  )
}

export default Dashboard
