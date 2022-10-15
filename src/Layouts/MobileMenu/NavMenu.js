import React from 'react'
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import './NavMenu.scss'

import {Link } from "react-router-dom";


export default function NavMenu() {
  return (
    <div className='NavMenu'>
   

<Navbar  expand="lg">
  
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link  className="hvr-bounce-to-bottom" as={Link} to="../article/1003">BLOG</Nav.Link>
        <Nav.Link  className="hvr-bounce-to-bottom" as={Link} to="../articlelist?offset=1">ARTICLES</Nav.Link>
        
        
        
      </Nav>
    </Navbar.Collapse>
 
</Navbar>
</div>
    
  )
}
