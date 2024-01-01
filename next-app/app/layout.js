import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav style={{
          width:'100%', 
          background:"orangered", 
          fontSize:"30px" , 
          padding:"10px",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          }}>
          <Link href={'/articles'} style={{marginLeft:"50px"}}>
            <butto>
            Articles
            </butto>
          </Link>
          <Link href={'/posts'} style={{marginLeft:"50px"}}>
            <butto>
            Posts
            </butto>
          </Link>
          <Link href={'/'} style={{marginLeft:"50px"}}>
            <butto>
            Home
            </butto>
          </Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
