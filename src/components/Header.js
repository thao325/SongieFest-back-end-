import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  // log out, dispatch & get state
  // get userLogin first (get that part of the state)
  const userLogin = useSelector((state) => state.userLogin);
  // destructure, only need userLogin info (don't need error message, loading)
  const { userInfo } = userLogin;

  // onClick event to logout user
  const logoutHandler = () => {
    console.log("Logout");
  };

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            {/* point to home page "/" */}
            <Navbar.Brand>SongieFest</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {/* <LinkContainer> */}
              <Nav.Link href="/register">Register</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/explore">Explore</Nav.Link>
              {/* </LinkContainer> */}

              {/* only want login link to show when we r logged out */}
              {/* if we're logged in & have userInfo, we show our NavBar dropdown */}
              {userInfo ? (
                // pass in userInfo (username), create dropdown links
                // title should show username when logged in
                <NavDropdown title={userInfo.name} id="username">
                  {/* point first one to visit user Profile  */}
                  <LinkContainer to="profile">
                    {/* .Item is the actual nav link */}
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>

                  {/* logout, not a link so no LinkContainer  */}
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                // else: if we are logged out, show login option
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user"></i>
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
