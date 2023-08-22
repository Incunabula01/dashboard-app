import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import DashboardSidebar from './components/sidebar'
import DashboardHeader from './components/header'
import GlobalState from './context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashboard App',
  description: 'Nextjs Dashboard App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalState>
          <div className="flex h-screen overflow-hidden">
            <DashboardSidebar />
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
              <DashboardHeader />
              <main className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p10">
                  {children}
              </main>
            </div>
          </div>
        </GlobalState>
      </body>
    </html>
  )
}
