'use client'

import React, { useState } from 'react'
import MaxWidthWrapper from '../components/MaxWidthWrapper'
import Card from '../components/Card'
import { trpc } from '../_trpc/client'
import Skeleton from 'react-loading-skeleton'
import { Button } from '../components/ui/button'

// TODO: there's an issue with infinite loading when the data is empty

const Dashboard = () => {
  const [search, setSearch] = useState<string>('')
  const { data: expenses, isLoading } = trpc.expenseList.useQuery()

  const filteredSearch = expenses?.filter((expenses) =>
    search !== ''
      ? expenses.name.includes(search) || expenses.category.includes(search)
      : true
  )

  return (
    <MaxWidthWrapper>
      <div className='py-8'>
        <div>Hi, name</div>
        <div>Balance</div>
        <Button>Add balance</Button>
      </div>
      <div className='float-right'>
        {expenses?.length === 0 && 'total amount'}
      </div>
      {expenses && expenses.length !== 0 ? (
        <div>
          <div className='py-8 bg-red-500'>
            <input
              value={search}
              className='bg-blue-50'
              placeholder='search by name or category'
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          {filteredSearch?.map((expense) => (
            <Card
              key={expense.id}
              expenseId={expense.id}
              title={expense.name}
              amount={expense.amount}
              tag='test tag'
              category={expense.category}
              date={expense.createdAt}
            />
          ))}
        </div>
      ) : isLoading ? (
        <Skeleton height={100} className='mt-6 px-12 rounded-xl' count={3} />
      ) : (
        <div className='mt-16 flex flex-col items-center gap-2'>
          <h3 className='font-semibold text-xl'>It's empty around here</h3>
          <p>Let&apos;s begin your budgeting.</p>
        </div>
      )}
    </MaxWidthWrapper>
  )
}

export default Dashboard
