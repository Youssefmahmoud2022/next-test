import './globals.css'
import { Cairo } from 'next/font/google'

const inter = Cairo({ subsets: ['latin'] })

export const metadata = {
  title: 'شارك .. للعقار التشاركي',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
         
      <body className={`${inter.className}`}  dir='rtl'>{children}</body>
    </html>
  )
}
