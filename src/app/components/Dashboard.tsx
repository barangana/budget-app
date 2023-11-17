'use client'

import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Card from './Card'
import { trpc } from '../_trpc/client'
import Skeleton from 'react-loading-skeleton'

//TODO: Add dynamic data such as name, balance and pass the props to card.
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
      <div className='float-right'>
        {expenses?.length !== 0 && 'total amount'}
      </div>
      {expenses && expenses.length !== 0 ? (
        expenses?.map((expense) => (
          <Card
            key={expense.id}
            expenseId={expense.id}
            title={expense.name}
            amount={expense.amount}
            tag='test tag'
            category={expense.category}
            date={expense.createdAt}
          />
        ))
      ) : isLoading ? (
        <Skeleton height={100} className='mt-6 px-12 rounded-xl' count={3} />
      ) : (
        <div>
          <h3>its empty around here</h3>
          <p>let&apos;s start budgeting</p>
        </div>
      )}
    </MaxWidthWrapper>
  )
}

export default Dashboard
