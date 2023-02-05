import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import 'bulma/css/bulma.min.css';
import axios from "axios";

// import { Form, Button, Row, Col } from "react-bootstrap";

const baseUrl = 'https://songiefest-be.herokuapp.com/login/';

export const Login = () => {
const [userData, setUserData] = useState({
    "email": "",
    "password": "",
});

const handleChange = (event) => {
    setUserData({
...userData,
[event.target.name]: event.target.value
    });
}

const submitForm = () => {
    try {
axios.post(baseUrl, userData).then((response) => {
        console.log(response.data);
});
    } catch (error) {
console.log(error);
    }
};

const navigate = useNavigate();
const handleRegisterClick = () => navigate("/register");




/////////    STYLING FROM REGISTER.JSX



return (
    <div className="auth-form-container">
    <h2>Login</h2>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"></link>
    <form className="login-form">
        <label className='label' htmlFor="email">Email</label>
        <p className="control has-icons-left has-icons-right">
        <input className="input" placeholder="Email" onChange={handleChange} type="email" id="email" name="email"/>
        <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
        </span>
        </p>

        <label className='label' htmlFor="password">Password</label>
        <p className="control has-icons-left">
        <input className="input" placeholder="Password" onChange={handleChange} type="password" id="password" name="password"/>
        <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
        </span>
        </p>

        <button className="button is-success" onClick={submitForm}>Login</button>
        <button className="button is-text" onClick={handleRegisterClick}>Don't have an account? Register</button>
    </form>
    </div>
);
};
