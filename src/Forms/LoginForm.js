import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import FormContainer from "../Components/FormContainer";
// import Loader from "../Components/Loader";
// import Message from "../Components/Message";


import axios from "axios";

function LoginForm() {
  const baseUrl = "https://songiefest-be.herokuapp.com";

  // `setUsername`, `setPassword` updates state whenever user types
  // into username/pw input fields
  const DefaultLoginState = {
    username: "",
    password: "",
  };
  const [loginData, setLoginData] = useState(DefaultLoginState);

  // update loginData state when input values change
  const handleChange = (event) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(loginData.username);
    console.log(loginData.password);
  };
  function loginApi() {
    axios
      .post(`${baseUrl}/login/`, {
        username: loginData.username,
        password: loginData.password,
      })
      .then((response) => {
        console.log("login data from API", response.data);
      })
      .catch((error) => {
        console.log("Error status", error.response.status);
        console.log("Error data", error.response.data);
      });
  }

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {/* {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}  */}

      <Form onSubmit={submitHandler}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="username"
            type="username"
            placeholder="Enter Username"
            value={loginData.username}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            name="password"
            autoComplete="off"
            value={loginData.password}
            onChange={handleChange}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary" onClick={loginApi}>
          Sign In
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          New User? <Link to="/register">
            Register Here!
            {/* <Button variant="link" onClick={handleRegisterClick}>
            Register
        </Button> */}
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
}

export default LoginForm;
