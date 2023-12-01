import { Rubik } from 'next/font/google'
import { Providers } from '@/components/Providers'
import MainLayout from '@/components/Layout'
import Navbar from '@/components/Navbar'
import config from '@/config/config'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: config.name,
    template: `%s | ${config.name}`
  },
  description: config.description,
  icons: {
    icon: 'favicon.ico'
  }
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
