import { Rubik } from 'next/font/google'
import { Providers } from '@/components/Providers'
import MainLayout from '@/components/Layout'
import Navbar from '@/components/Navbar'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'KPU-FTI',
  description: 'applikasi pemilu raya kpu fti'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Providers>
          <MainLayout>
            <Navbar />
            {children}
          </MainLayout>
        </Providers>
      </body>
    </html>
  )
}
