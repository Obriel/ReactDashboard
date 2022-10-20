import React, { Component } from 'react'
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'

import Container from 'react-bootstrap/Container';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

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
            <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
            </div>
            </Router>
        )
    }
}