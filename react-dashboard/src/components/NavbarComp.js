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

  const [items] = useState([
    { id: 1, name: "Item1", status: "", toggled: false },
    { id: 2, name: "Item2", status: "", toggled: false },
    { id: 3, name: "Item3", status: "", toggled: false },
    { id: 4, name: "Item4", status: "", toggled: false }
  ]);



const pinToDashboard = (item) => {
  setDashboard([...dashboard, item]);
};


    
        return(
          <>
            <Router>
            <div>
                <Navbar bg="dark" variant="dark">
        <Container>
                <Navbar.Brand as={Link} to={"/dashboard"}>Dashboard ({dashboard.length})</Navbar.Brand>
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

<div className="Page2">

<h1>Items</h1>
{items.map((item, index) =>(
  <div key={index} className="box active" onClick={() => pinToDashboard(item)}><p>{item.name}</p><p>{item.status}</p></div>
))}

</div>
</>

        );
    
}