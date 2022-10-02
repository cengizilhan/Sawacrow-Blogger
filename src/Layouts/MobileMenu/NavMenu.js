import React from 'react'
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import './NavMenu.scss'


export default function NavMenu() {
  return (
    <div className='NavMenu'>

<Navbar  expand="lg">
  
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link  className="hvr-bounce-to-bottom"  href="../article/1003">BLOG</Nav.Link>
        <Nav.Link  className="hvr-bounce-to-bottom"  href="../articlelist?offset=1">ARTICLES</Nav.Link>
        
        
        
      </Nav>
    </Navbar.Collapse>
 
</Navbar>
</div>
    
  )
}
