
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Infinity',
  description: 'Take you to sky',
  // icons: {
  //   icon: '/public/favicon.ico',
  // },
}


export default function RootLayout({ children }) {


  
  return (
    <html>
      <body>
      <main className={inter.className}>
      
        {children}
    
        </main>
      </body>
    </html>
  )
}
