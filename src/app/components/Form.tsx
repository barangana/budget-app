'use client'

import React, { useState } from 'react'
import { trpc } from '../_trpc/client'

// Form component for entering an expense and editing an expense
// It takes in title, category, amount
// There should be a create button and an exit button.

interface FormProps {
  name: string
  category: string
  amount: number
}

const Form: React.FC = () => {
  const [expense, setExpense] = useState<FormProps>({
    name: '',
    category: '',
    amount: 0,
  })

  const addExpense = trpc.createExpense.useMutation()

  return (
    <div className='bg-blue-300 p-12 rounded-lg'>
      <div className='flex flex-col'>
        <label>name of expense</label>
        <input
          className='rounded-md my-4'
          type='text'
          onChange={(e) => setExpense({ ...expense, name: e.target.value })}
        />
        <label>category</label>
        <input
          className='rounded-md my-4'
          type='text'
          onChange={(e) => setExpense({ ...expense, category: e.target.value })}
        />
        <label>amount</label>
        <input
          className='rounded-md my-4'
          type='number'
          onChange={(e) =>
            setExpense({ ...expense, amount: e.target.valueAsNumber })
          }
        />
        <button onClick={async () => addExpense.mutate(expense)}>create</button>
      </div>
    </div>
  )
}

export default Form
