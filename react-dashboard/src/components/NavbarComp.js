import React, { Component } from 'react'
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'

import Container from 'react-bootstrap/Container';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import Dashboard from './Dashboard';
  import Page1 from './Page1';
  import Page2 from './Page2';

export default class NavbarComp extends Component{
    render(){
        return(
            <Router>
            <div>
                <Navbar bg="dark" variant="dark">
        <Container>
                <Navbar.Brand as={Link} to={"/dashboard"}>Dashboard</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/page1"}>Page 1</Nav.Link>
            <Nav.Link as={Link} to={"/page2"}>Page 2</Nav.Link>
          </Nav>
          </Container>
          </Navbar>
            </div>
            <div>
            <Routes>
            <Route path="/page1" element={<Page1/>} />
            <Route path="/page2" element={<Page2/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
            </div>
            </Router>
        )
    }
}