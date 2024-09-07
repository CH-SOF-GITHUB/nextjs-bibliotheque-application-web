import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import Menu from '../components/client/menu'
import AuthProvider from '@/providers/authProvider'
import SideBar from './admin/sideBar'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default async function RootLayout ({ children }) {
  const session = await getServerSession(authOptions)
  if (!session) {
    return (
      <section className='py-24'>
        <div className='container'>
          <h1 className='text-2xl font-bold'>
            You are not authorized to view this page
          </h1>
        </div>
      </section>
    )
  }
  return (
    <div className='row mt-4'>
      <div className='col-md-3'>
        <SideBar />
      </div>
      <div className='col-md-9'>
        {children}
      </div>
    </div>
  )
}
