import React from 'react'

// Form component for entering an expense and editing an expense
// It takes in title, category, amount
// There should be a create button and an exit button.

interface FormProps {
  title: string
  category: string
  amount: number
}

const Form: React.FC<FormProps> = ({ title, category, amount }) => {
  return (
    <div className='bg-blue-300 p-12 rounded-lg'>
      <div className='flex flex-col'>
        <label>title</label>
        <input className='rounded-md  my-4' type='' />
        <label>category</label>
        <input className='rounded-md  my-4' type='' />
        <label>amount</label>
        <input className='rounded-md my-4' type='' />
        <button>create</button>
      </div>
    </div>
  )
}

export default Form
