import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar/Navbar';
import Modal from './components/modals/Modal';
import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';
import LoginModal from './components/modals/LoginModal';
import getCurrentUser from './actions/getCurrentUser';
import RentModal from './components/modals/RentModal';
import ClientOnly from './components/ClientOnly';
import SearchModal from '@/app/components/modals/SearchModal';

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
      <ClientOnly>
        <ToasterProvider />
        <LoginModal />
        <SearchModal />
        <RentModal />
        <RegisterModal />
        <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">
        {children}
        </div>
        </body>
    </html>
  )
}
