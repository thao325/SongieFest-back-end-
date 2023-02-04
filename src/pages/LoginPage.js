import React, { useState} from "react";
// import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";
import { login } from "../actions/userActions";

function LoginPage() {
  // email, pw = values entered by user into form
  // `setEmail`, `setPW` updates state whenever user types
  // into email/pw input fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const location = useLocation();

  // check location, if we have those params, get that value
  // gives us an array, get 2nd index which is value in {redirect}
  // if dont have, set to empty /
  // const redirect = location.search ? location.search.split("=")[1] : "/";

  // dispatch login action, get our user state
  // userLogin is inside store.js
  const userLogin = useSelector((state) => state.userLogin);

  // // destructure userLogin (object)
  const { error, loading } = userLogin;

  // logged in user can't log in again, if user info exists
  // redirect users, send them back to whatever was in redirect
  // then dispatch
  // useEffect(() => {
  //   if (userInfo) {
  //     navigate(redirect);
  //   }
  // }, [navigate, userInfo, redirect]);

  // function called when form submitted
  // dispatches `login` action w email & pw values to redux store
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}

      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Sign In
        </Button>
      </Form>
      {/* sets padding py-3 */}
      <Row className="py-3">
        <Col>
          {/* check if new user, if yes link to register
        if we dont have link, send user to register page w/ no params */}
          New User? {/* try "/register/" */}
          <Link to="/register">
            {/* <Link to={redirect ? `/register?redirect=${redirect}` : "/"}> */}
            Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
}

export default LoginPage;
