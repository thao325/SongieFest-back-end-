///// THAO TESTING REGISTER USER FROM UDEMY

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col, FormGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { register } from "../actions/userActions";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading } = userRegister;

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(name, email, password));
    }
  };
  return (
    <FormContainer>
      <h1>Sign In</h1>
      {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <FormGroup controlId="name">
          <Form.Label> Name</Form.Label>

          <Form.Control
            required
            type="name"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </FormGroup>

        <FormGroup controlId="email">
          <Form.Label> Email Address</Form.Label>

          <Form.Control
            required
            type="email"
            placeholder="Enter Email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </FormGroup>
        <FormGroup controlId="password">
          <Form.Label> Password</Form.Label>

          <Form.Control
            required
            type="password"
            placeholder="Enter Password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </FormGroup>
        <FormGroup controlId="passwordConfirm">
          <Form.Label> Confirm Password</Form.Label>

          <Form.Control
            required
            type="password"
            placeholder="Confirm password"
            autoComplete="new-password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </FormGroup>
        <Button type="submit" variant="primary">
          Register
        </Button>
        <Row className="py-3">
          <Col>
            Have an Account? <Link to="/login">Sign In</Link>
          </Col>
        </Row>
      </Form>
    </FormContainer>
  );
}

export default RegisterPage;

///////// OLD CODE BELOW

// import { useRef, useState, useEffect } from "react";

// import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import axios from './axios';

// const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const REGISTER_URL = '/register';

// const Register = () => {
//   const userRef = useRef();
//   const errRef = useRef();

//   const [user, setUser] = useState('');
//   const [validName, setValidName] = useState(false);
//   const [userFocus, setUserFocus] = useState(false);

//   const [pwd, setPwd] = useState('');
//   const [validPwd, setValidPwd] = useState(false);
//   const [pwdFocus, setPwdFocus] = useState(false);

//   const [matchPwd, setMatchPwd] = useState('');
//   const [validMatch, setValidMatch] = useState(false);
//   const [matchFocus, setMatchFocus] = useState(false);

//   const [errMsg, setErrMsg] = useState('');
//   const [success, setSuccess] = useState(false);

//   useEffect(() => {
//       userRef.current.focus();
//   }, [])

//   useEffect(() => {
//       setValidName(USER_REGEX.test(user));
//   }, [user])

//   useEffect(() => {
//       setValidPwd(PWD_REGEX.test(pwd));
//       setValidMatch(pwd === matchPwd);
//   }, [pwd, matchPwd])

//   useEffect(() => {
//       setErrMsg('');
//   }, [user, pwd, matchPwd])

//   const handleSubmit = async (e) => {
//       e.preventDefault();
//       // if button enabled with JS hack
//       const v1 = USER_REGEX.test(user);
//       const v2 = PWD_REGEX.test(pwd);
//       if (!v1 || !v2) {
//           setErrMsg("Invalid Entry");
//           return;
//       }
//       try {
//           const response = await axios.post(REGISTER_URL,
//               JSON.stringify({ user, pwd }),
//               {
//                   headers: { 'Content-Type': 'application/json' },
//                   withCredentials: true
//               }
//           );
//           console.log(response?.data);
//           console.log(response?.accessToken);
//           console.log(JSON.stringify(response))
//           setSuccess(true);
//           //clear state and controlled inputs
//           //need value attrib on inputs for this
//           setUser('');
//           setPwd('');
//           setMatchPwd('');
//       } catch (err) {
//           if (!err?.response) {
//               setErrMsg('No Server Response');
//           } else if (err.response?.status === 409) {
//               setErrMsg('Username Taken');
//           } else {
//               setErrMsg('Registration Failed')
//           }
//           errRef.current.focus();
//       }
//   }

//   return (
//       <>
//           {success ? (
//               <section>
//                   <h1>Success!</h1>
//                   <p>
//                       <a href="/">Sign In</a>
//                   </p>
//               </section>
//           ) : (
//               <section>
//                   <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
//                   <h1>Register</h1>
//                   <form onSubmit={handleSubmit}>
//                       <label htmlFor="username">
//                           Username:
//                           <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
//                           <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
//                       </label>
//                       <input
//                           type="text"
//                           id="username"
//                           ref={userRef}
//                           autoComplete="off"
//                           onChange={(e) => setUser(e.target.value)}
//                           value={user}
//                           required
//                           aria-invalid={validName ? "false" : "true"}
//                           aria-describedby="uidnote"
//                           onFocus={() => setUserFocus(true)}
//                           onBlur={() => setUserFocus(false)}
//                       />
//                       <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
//                           <FontAwesomeIcon icon={faInfoCircle} />
//                           4 to 24 characters.<br />
//                           Must begin with a letter.<br />
//                           Letters, numbers, underscores, hyphens allowed.
//                       </p>

//                       <label htmlFor="password">
//                           Password:
//                           <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
//                           <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
//                       </label>
//                       <input
//                           type="password"
//                           id="password"
//                           onChange={(e) => setPwd(e.target.value)}
//                           value={pwd}
//                           required
//                           aria-invalid={validPwd ? "false" : "true"}
//                           aria-describedby="pwdnote"
//                           onFocus={() => setPwdFocus(true)}
//                           onBlur={() => setPwdFocus(false)}
//                       />
//                       <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
//                           <FontAwesomeIcon icon={faInfoCircle} />
//                           8 to 24 characters.<br />
//                           Must include uppercase and lowercase letters, a number and a special character.<br />
//                           Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
//                       </p>

//                       <label htmlFor="confirm_pwd">
//                           Confirm Password:
//                           <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
//                           <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
//                       </label>
//                       <input
//                           type="password"
//                           id="confirm_pwd"
//                           onChange={(e) => setMatchPwd(e.target.value)}
//                           value={matchPwd}
//                           required
//                           aria-invalid={validMatch ? "false" : "true"}
//                           aria-describedby="confirmnote"
//                           onFocus={() => setMatchFocus(true)}
//                           onBlur={() => setMatchFocus(false)}
//                       />
//                       <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
//                           <FontAwesomeIcon icon={faInfoCircle} />
//                           Must match the first password input field.
//                       </p>

//                       <button disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
//                   </form>
//                   <p>
//                       Already registered?<br />
//                       <span className="line">
//                           {/*put router link here*/}
//                           <a href="/">Sign In</a>
//                       </span>
//                   </p>
//               </section>
//           )}
//       </>
//   )
// }

// export default Register
