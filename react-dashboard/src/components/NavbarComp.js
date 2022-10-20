import React, { Component } from 'react'
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'

import Container from 'react-bootstrap/Container';

export default class NavbarComp extends Component{
    render(){
        return(
            <div>
                <Navbar bg="dark" variant="dark">
        <Container>
                <Navbar.Brand href="#dashboard">Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#page1">Page 1</Nav.Link>
            <Nav.Link href="#page2">Page 2</Nav.Link>
          </Nav>
          </Container>
          </Navbar>
            </div>
        )
    }
}