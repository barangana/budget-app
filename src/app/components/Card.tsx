// This component should take in title, amount spent, tag, categories and date

import React from 'react'
import { Button } from './ui/button'
import { Pencil, Trash } from 'lucide-react'

//TODO: Add date for the props
//The categories should probably be placeholders for images

interface CardProps {
  title: String
  amount: number
  tag: String
  category: String
  // date:
}

const Card: React.FC<CardProps> = ({ title, amount, tag, category }) => {
  return (
    <div
      className='flex justify-between px-12 border mt-12 rounded-xl'
      color='background'
    >
      <div className='py-4'>
        <div className='font-bold'>{title}</div>
        <div>category: {category}</div>
        <div>date: </div>
      </div>
      {/* TODO: Fix this flex properly */}
      <div className='flex py-8'>
        <div className='px-10 py-2 font-bold'>amount</div>
        <Button className='mx-2'>
          <Pencil className='h-4 w-4' />
        </Button>
        <Button variant='destructive'>
          <Trash className='h-4 w-4' />
        </Button>
      </div>
    </div>
  )
}

export default Card
