'use client'

import React from 'react'
import { Button } from './ui/button'
import { Pencil, Trash } from 'lucide-react'
import { trpc } from '../_trpc/client'

//The categories should probably be placeholders for images
//TODO: Fix the format of datetime with date-fns
//TODO: Fix the format of amount by making it a decimal number i.e 2.00

interface CardProps {
  expenseId: string
  title: string
  amount: number
  tag: string
  category: string
  date: string
}

const Card: React.FC<CardProps> = ({
  title,
  amount,
  tag,
  category,
  date,
  expenseId,
}) => {
  const utils = trpc.useContext()
  const { mutate: deleteExpense } = trpc.deleteExpense.useMutation({
    onSuccess: () => {
      utils.expenseList.invalidate()
    },
  })

  const handleEdit = () => {
    //TODO: Add edit functionality
  }

  return (
    <div
      className='flex justify-between px-12 border mt-12 rounded-xl'
      color='background'
    >
      <div className='py-4'>
        <div className='font-bold'>{title}</div>
        <div>{category}</div>
        <div>{date?.toString()}</div>
      </div>
      {/* TODO: Fix this flex properly */}
      <div className='flex py-8'>
        <div className='px-10 py-2 font-bold'>${amount}</div>
        <Button className='mx-2'>
          <Pencil className='h-4 w-4' />
        </Button>
        <Button
          variant='destructive'
          onClick={() => deleteExpense({ id: expenseId })}
        >
          <Trash className='h-4 w-4' />
        </Button>
      </div>
    </div>
  )
}

export default Card
