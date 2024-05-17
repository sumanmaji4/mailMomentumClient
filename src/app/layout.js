// import { Inter } from "next/font/google";
import { Toaster } from '@/components/ui/sonner'
import SideMenu from './SideMenu'
import './globals.css'

export const metadata = {
  title: 'Mail Momentum',
  description: 'One stop solution for email marketing',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='font-manrope flex min-h-screen w-full'>
        <SideMenu />
        {children}
        <Toaster richColors />
      </body>
    </html>
  )
}
