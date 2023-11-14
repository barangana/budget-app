'use client'

import React from 'react'
import { Button } from './ui/button'
import { Pencil, Trash } from 'lucide-react'

//The categories should probably be placeholders for images
//TODO: Fix the format of datetime with Moment.js
//TODO: Fix the format of amount by making it a decimal number i.e 2.00

interface CardProps {
  title: String
  amount: number
  tag: String
  category: String
  date: Date
}

const Card: React.FC<CardProps> = ({ title, amount, tag, category, date }) => {
  const handleDelete = () => {
    //TODO: Add delete functionality
    // takes in id of the budget entry
    // create the delete function on the backend
    // refresh state or page so it is seamless
  }

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
        <div>{date.toString()}</div>
      </div>
      {/* TODO: Fix this flex properly */}
      <div className='flex py-8'>
        <div className='px-10 py-2 font-bold'>${amount}</div>
        <Button className='mx-2'>
          <Pencil className='h-4 w-4' />
        </Button>
        <Button variant='destructive' onClick={() => handleDelete()}>
          <Trash className='h-4 w-4' />
        </Button>
      </div>
    </div>
  )
}

export default Card
