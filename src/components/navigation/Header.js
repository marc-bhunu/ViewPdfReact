import React from 'react'
import { Navbar, Nav, Container } from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'
const Header = () => {
    return (
        <header>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect sticky>
          <Container>
            <Navbar.Brand className="fas fa-long-arrow-alt-left mr-3">Back</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    )
}

export default Header
