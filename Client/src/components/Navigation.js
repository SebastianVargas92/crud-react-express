

import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import "../assets/css/nav.css";


class Navigation extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar  style={{ width: '100%'}}>
                    
                    <Navbar.Brand href="/home"></Navbar.Brand>
                    <Nav className="mr-auto">
                        
                        <Nav.Link className="navTags" href="/home">Home</Nav.Link>
                        <Nav.Link className="navTags" href="/donde">Dónde Estamos</Nav.Link>
                        <Nav.Link className="navTags" href="/productos">Productos</Nav.Link>
                        <Nav.Link className="navTags" href="/formulario">Formulario</Nav.Link>
                        
                    </Nav>
                    <Form inline>
                        <FormControl className="navSearch" type="text" placeholder="Search"  />
                        <Button className="navSearch" variant="outline-dark">Buscar</Button>
                    </Form>
                    
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Navigation;