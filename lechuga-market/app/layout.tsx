import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import globals from './globals,css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {  
  title: 'Lechuga Market - Frescura Natural',
  description: 'Venta de lechuga fresca y orgánica directamente del campo a tu mesa',  }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}