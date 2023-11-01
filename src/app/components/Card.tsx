// This component should take in title, amount spent, tag, categories and date

import React from 'react'

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
    <div className='flex justify-between px-10 py-4 border mt-12 bg-blue-300'>
      <div>
        <div>{title}</div>
        <div>category: {category}</div>
        <div>date: </div>
      </div>
      <div className='flex py-6'>
        <div className='px-4'>amount: {amount}</div>
        <div>
          <button className='px-2'>icon</button>
          <button className='px-2'>icon</button>
        </div>
      </div>
    </div>
  )
}

export default Card
