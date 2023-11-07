
import './globals.css'
import { Inter } from 'next/font/google'
import { StateContext } from './context/StateContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'INFINITY Flight Horizons',
  description: 'Take you to sky',
  icons: {
    icon: '/app/favicon.ico',
  },
}
 

export default function RootLayout({ children }) {


  
  return (
    <html>
      <body>
      <main className={inter.className}>
      
        {/* {children} */}
        <StateContext>{children}</StateContext>
    
        </main>
      </body>
    </html>
  )
}
