import React from 'react'
import { Button } from './ui/button'

interface ExtSignInButtonProps {
  children: React.ReactNode
}

const ExtSignInButton: React.FC<ExtSignInButtonProps> = ({ children }) => {
  return <Button onClick={() => console.log('login')}>{children}</Button>
}

export default ExtSignInButton
