import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";


function Navbars({scroll,scroll2}) {
  const redirect = useNavigate()
  const [id, setId] = useState("");
  const themes = {
    color: "#fff",
  };
  return (
    <Navbar  collapseOnSelect expand="lg" className="up pt-4">
      <Container>
        <Navbar.Brand style={{color:"#fff"}}>بيت</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav style={{ gap: "25px" }}>
            <Nav.Link id="e"
            style={id === "e"?themes:{}}
              onClick={(e) => {
 
                setId(e.target.id);
                redirect({
                  pathname:"/",
                  search:"/home"

                })
              }}
              href="#deets"
            >
              بيتك
            </Nav.Link>
            <Nav.Link
              id="a"
              eventKey={2}
              style={id === "a"?themes:{}}
              onClick={(e) => {
                scroll.current?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'nearest',
                  inline: 'center'
                })
                setId(e.target.id);
              }}
              href="#memes"
            >
              فلل
            </Nav.Link>
            <Nav.Link
              id="b" 
              style={id === "b"?themes:{}}
              onClick={(e) => {
                console.log(e.target);
                setId(e.target.id);
                scroll2.current?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'nearest',
                  inline: 'center'
                })
              }}
              
              eventKey={3}
             
            >
              منازل
            </Nav.Link>
            <Button id="c" eventKey={4} href="#memes">
              تواصل معنا
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
