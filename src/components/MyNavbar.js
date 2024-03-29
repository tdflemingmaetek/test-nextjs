'use client'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SignUpButton, SignInButton, UserButton, SignedIn, SignedOut } from '@clerk/nextjs';

const MyNavbar = () => {
  return (
    <Navbar expand="md" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Test Next.js/Bootstrap site</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-between'>
          <Nav className='me-auto'>
            <Nav.Link href="/">Home</Nav.Link>
            <SignedIn>
            <Nav.Link href="About">About</Nav.Link>
            <Nav.Link href="Contact">Contact Us</Nav.Link>
            </SignedIn>
            <SignedOut>
            <SignUpButton mode="modal" afterSignUpUrl='/'><Nav.Link href="#">Register</Nav.Link></SignUpButton>{' '}
            <SignInButton mode="modal" afterSignInUrl='/'><Nav.Link href="#">Sign In</Nav.Link></SignInButton>{' '}
            </SignedOut>
          </Nav>
          <UserButton className="d-sm-none" afterSignOutUrl='/'/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
