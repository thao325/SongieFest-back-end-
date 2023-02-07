import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


import '../style-sheets/Register.css';
import 'bulma/css/bulma.min.css';
import axios from "axios";

const baseUrl= 'https://songiefest-be.herokuapp.com/register/'
export const Register = ()=>{

    // const [email, setEmail] = useState('');

    // const [password, setPassword] = useState('');
    // const [pass, setPass] = useState('');
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [username, setUsername] = useState('');
    // const [name, setName] = useState('');
    // const [username, setUsername] = useState('');
    const [userData, setUserData] = useState({
        "first_name": "",
        "last_name":"",
        "email":"",
        "password":"",
        "username":""


    });

    const handleChange=(event) =>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });
    }

    const submitForm = () => {
        const userFormData=new FormData();
        userFormData.append("first_name", userData.first_name)
        userFormData.append("last_name", userData.last_name)
        userFormData.append("email", userData.email)
        userFormData.append("password", userData.password)
        userFormData.append("username", userData.username)
        try{
            axios.post(baseUrl, userFormData).then((response)=>{
            console.log(response.data)
            });
        
        }catch(error){
            console.log(error)
        }
    };
        
        const navigate = useNavigate();
        const handleLoginClick = () => navigate("/login");
        
    
    
    return(
        <div className="auth-form-container">
        <h2>Register</h2>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"></link>
    <form className="register-form" >

    <label className="label" htmlFor="firstname">First Name</label>
    <div className="control">
        <input className="input" type="text" name="first_name" onChange={handleChange} id="firstname" placeholder="First Name"/>
    </div>

    <label className="label" htmlFor="lastname">Last Name</label>
        <input className="input" name="last_name" onChange={handleChange} id="lastname" placeholder="Last Name"/>

    
        

        <label htmlFor='username'className="label">Username</label>
        <div className="control has-icons-left has-icons-right">
            <input className="input is-success" name="username" onChange={handleChange} id="username" placeholder="Username" />
            <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
            </span>
            <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
            </span>
        </div>

        {/* <label htmlFor="username">Username</label> */}
        {/* <input name="username" onChange={handleChange} id="username" placeholder="Username" /> */}
    
        <label className='label' htmlFor="email">Email</label>
        <p className="control has-icons-left has-icons-right">
            <input className="input" placeholder="Email" onChange={handleChange} type="email"  id="email" name="email"/>
            <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
            </span>
        </p>

{/*          
        <input  onChange={handleChange} type="password" id="password" name="password" />
        &nbsp; 
        <label htmlFor="confirm-password"> Confirm Password</label>
        <input  onChange={handleChange} type="confirm-password" id="confirm-password" name="confirm-password" /> */}
        <label htmlFor="password">Password</label>
        <div className="field">
            <p className="control has-icons-left">
                <input className="input" type="password" placeholder="Password" onChange={handleChange} id="password" name="password" autoComplete="off"/>
                    <span className="icon is-small is-left">
                        <i className="fa-solid fa-lock"></i>
                    
                    </span>
            </p>
        </div>
        
        
        &nbsp;
        <button onClick={submitForm}type="submit"> Submit</button>
    </form>
    <button className="link-btn" onClick={handleLoginClick}>Already have an account? Login here.</button>
</div> 
    )
}