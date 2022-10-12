import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// import { SocialIcon } from "react-social-icons";
import logo from "./MintLogoWhiteBG.png";


export default function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={{color: "dark"}}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} className="App-logo" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link eventKey={2} href="#get-involved">
                Get Involved
              </Nav.Link>
              <Nav.Link href="#learn">Learn</Nav.Link>
              {/* for dropdown menu */}
              {/* <NavDropdown title="Action" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Learn</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
              
              {/* I'll change the background later, just make sure these work */}
              {/* <SocialIcon url="https://instagram.com/ubcmint" />
              <SocialIcon url="https://linkedin.com/ubcmint" />
              <SocialIcon url="https://github.com/ubcmint" />
              <SocialIcon url="https://youtube.com/ubcmint" /> */}
            </Nav>

            <Nav>
              <i></i>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
