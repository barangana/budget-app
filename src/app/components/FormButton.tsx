'use client'

import React, { useState } from 'react'
import { Button } from './ui/button'
import Form from './Form'

const FormButton: React.FC = () => {
  const [showForm, setShowForm] = useState(false)

  const toggleForm = () => {
    setShowForm(!showForm)
    console.log(showForm)
  }

  return (
    <>
      <Button onClick={toggleForm}>FormButton</Button>
      {showForm && <Form />}
    </>
  )
}

export default FormButton
