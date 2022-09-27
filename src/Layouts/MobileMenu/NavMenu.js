import React from 'react'
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import './NavMenu.scss'
import '../../Assets/Vendors/Hover-master/css/hover-min.css'

export default function NavMenu() {
  return (
    <div className='NavMenu'>

<Navbar  expand="lg">
  
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link  className="hvr-bounce-to-bottom"  href="#home">BLOG</Nav.Link>
        <Nav.Link  className="hvr-bounce-to-bottom"  href="#link">ABOUT</Nav.Link>
        <Nav.Link  className="hvr-bounce-to-bottom"  href="/articlelist?offset=1">ARTICLES</Nav.Link>
        <Nav.Link className="hvr-bounce-to-bottom" href="#link">PROJECTS</Nav.Link>
        {
          /*
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">LINKS</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
           */
        }
        
      </Nav>
    </Navbar.Collapse>
 
</Navbar>
</div>
    
  )
}
