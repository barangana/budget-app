// This component should take in title, amount spent, tag, categories and date

import React from 'react'

//TODO: Add date for the props

interface CardProps {
  title: String
  amount: number
  tag: String
  category: String
  // date:
}

const Card: React.FC<CardProps> = ({ title, amount, tag, category }) => {
  return (
    <div className='border mt-12'>
      <div>{title}</div>
      <div>amount: {amount}</div>
      <div>tags:{tag}</div>
      <div>category: {category}</div>
    </div>
  )
}

export default Card
