import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            {/* point to home page "/" */}
            <Navbar.Brand>SongieFest(home)</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {/* <LinkContainer to="/cart">
                <Nav.Link>   */}
              {/* icons */}
              {/* <i className="fas fa-shopping-cart"></i>Cart
                </Nav.Link>
              </LinkContainer> */}

              {/* <LinkContainer> */}

                <Nav.Link href="/login">Login Page plz</Nav.Link>
                <Nav.Link href="/register">Register</Nav.Link>

              {/* </LinkContainer> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
