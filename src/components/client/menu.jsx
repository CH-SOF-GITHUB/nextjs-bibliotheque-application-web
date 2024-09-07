'use client'

import { Container, Nav, Navbar } from 'react-bootstrap'

import HomeIcon from '@mui/icons-material/Home'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import HelpIcon from '@mui/icons-material/Help'
import LogoutIcon from '@mui/icons-material/Logout'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

const Menu = () => {
  const { data: session } = useSession()

  return (
    <div>
      <Navbar bg='dark' data-bs-theme='dark'>
        <Container>
          <Navbar.Brand href='#home'>Books Universe</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link as={Link} href='/'>
              <HomeIcon />
              Home
            </Nav.Link>
            {session ? (
              <Nav.Link as={Link} href='/' onClick={() => signOut()}>
                <LogoutIcon />
                Se déconnecter
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} href='/' onClick={() => signIn()}>
                <AccountCircleIcon />
                Se connecter
              </Nav.Link>
            )}

            <Nav.Link as={Link} href='/admin/livres'>
              <LibraryBooksIcon />
              Livres
            </Nav.Link>
            <Nav.Link as={Link} href='/aide'>
              <HelpIcon />
              Aide
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Menu
