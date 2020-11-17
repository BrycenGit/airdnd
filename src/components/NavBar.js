import React from 'react';
import Link from './Link';
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';


const masterLinkList = [
  {name:'Home'},
  {name:'Places to Stay'},
  {name:'Experiences'},
  {name:'Online Experiences'},
  {name:'Become a Host'},
  {name:'Profile'}
]

function NavBar(){
  return (
    <React.Fragment>
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">airdnd</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
      <Nav.Link href="#home">Places to stay</Nav.Link>
      <Nav.Link href="#link">Experiences</Nav.Link>
      <Nav.Link href="#link">Online Experiences</Nav.Link>
      <NavDropdown title="More Stuff" id="basic-nav-dropdown">
        
      {masterLinkList.map((link, index) =>
        <NavDropdown.Item href="#action/3.1">{link.name}<br /></NavDropdown.Item>
      )}
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    </React.Fragment>
  );
}

export default NavBar;


