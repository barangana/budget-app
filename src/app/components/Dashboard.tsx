'use client'

import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Card from './Card'
import { db } from '../db'
import { trpc } from '../_trpc/client'

//TODO: Add dynamic data such as name, balance and pass the props to card.

const Dashboard = async () => {
  const expenses = await db.expenses.findMany()

  // fix this bug where data shows undefined
  // const { data } = trpc.expenseList.useQuery()
  // console.log(data)

  return (
    <MaxWidthWrapper>
      <div className='py-8'>
        <div>Hi, name</div>
        <div>Balance</div>
      </div>
      <div className='py-8 bg-red-500'>FILTERS</div>
      <div className='float-right'>Total Value: amount</div>
      {expenses.map((expense) => (
        <Card
          title={expense.name}
          amount={expense.amount}
          tag='test tag'
          category={expense.category}
          date={expense.createdAt}
        />
      ))}
    </MaxWidthWrapper>
  )
}

export default Dashboard
