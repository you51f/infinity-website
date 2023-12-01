
import './globals.css'
import { Inter } from 'next/font/google'
import { StateContext } from './context/StateContext'
import Script from "next/script";

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
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>
      </body>
    </html>
  )
}
