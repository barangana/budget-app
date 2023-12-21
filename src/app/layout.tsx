import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Providers from './components/Providers'
import SessionProvider from './components/SessionProvider'
import { getServerSession } from 'next-auth'

import 'react-loading-skeleton/dist/skeleton.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Budgeto',
  description: 'Conceptualized, Designed and Developed by Adriel Barangan.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()
  return (
    <html lang='en' className='light'>
      <Providers>
        <SessionProvider session={session}>
          <body>
            <Navbar /> {children}
          </body>
        </SessionProvider>
      </Providers>
    </html>
  )
}
