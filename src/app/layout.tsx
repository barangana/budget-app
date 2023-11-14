import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Providers from './components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Budgeto',
  description: 'Conceptualized and Developed by Adriel Barangan.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='light'>
      <Providers>
        <body>
          <Navbar /> {children}
        </body>
      </Providers>
    </html>
  )
}
