import React, { Component, useState } from 'react'
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import "./Page2.css";

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

export default function NavbarComp() {

  const [dashboard, setDashboard] = useState([]);
  const [page, setPage] = useState('items');



const pinToDashboard = (item) => {

  setDashboard([...dashboard, { ...item }]);

};


const unpinFromDashboard = (itemToRemove) => {
  setDashboard(
    dashboard.filter((item) => item !== itemToRemove)
    );
};

// ({dashboard.length})

    
        return(
          <>
            <Router>
            <div>
                <Navbar bg="dark" variant="dark">
        <Container>
                <Navbar.Brand as={Link} to={"/dashboard"}>Dashboard </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/page1"}>Page 1</Nav.Link>
            <Nav.Link as={Link} to={"/page2"}>Page 2</Nav.Link>
          </Nav>
          </Container>
          </Navbar>
            </div>
            <div>
            <Routes>
            <Route path="/page1" element={<Page1 pinToDashboard = {pinToDashboard}/>} />
            <Route path="/page2" element={<Page2 pinToDashboard = {pinToDashboard}/>} />
            <Route path="/dashboard" element={<Dashboard dashboard={dashboard} unpinFromDashboard = {unpinFromDashboard}/>} />
        </Routes>
            </div>
            </Router>
</>

        );
    
}