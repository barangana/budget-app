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
      <div className='flex'>
        <div className='px-2'>amount</div>
        <button>hello</button>
        <button>hello</button>
      </div>
    </div>
  )
}

export default Card
