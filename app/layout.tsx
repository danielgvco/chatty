import type { Metadata } from 'next'
import { Inter, Nunito } from 'next/font/google'
import './globals.css'
import Chat from '@/components/Chat'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

const nunito = Nunito({ 
  weight: ['400', '500', '700'],
  subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chatty',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Navbar />
        <Chat />
      </body>
    </html>
  )
}
