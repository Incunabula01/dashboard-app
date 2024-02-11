import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import DashboardSidebar from './components/Sidebar';
import DashboardHeader from './components/Header';
import GlobalState from './context';
import NextAuthProvider from './auth-provider';
import Loader from './components/Loader';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

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
      <body className={spaceGrotesk.className}>
        <NextAuthProvider>
          <GlobalState>
            <div className="flex h-screen overflow-hidden">
              <DashboardSidebar />
              <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden bg-bodydark1">
                <DashboardHeader />
                <main className="max-w-screen-2xl p-4 md:p-6 2xl:p10">
                  {children}
                </main>
              </div>
              <Loader />
            </div>
          </GlobalState>
        </NextAuthProvider>

      </body>
    </html>
  )
}
