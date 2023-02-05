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
        <label htmlFor="firstname">First Name</label>
        <input  name="first_name" onChange={handleChange} id="firstname" placeholder="First Name" />
        <p></p>
        <label htmlFor="lastname">Last Name</label>
        <input  name="last_name" onChange={handleChange} id="lastname" placeholder="Last Name" />
        <p></p>

        <label htmlFor='username'class="label">Username</label>
        <div class="control has-icons-left has-icons-right">
            <input class="input is-success" name="username" onChange={handleChange} id="username" placeholder="Username" />
            <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
            </span>
        </div>

        {/* <label htmlFor="username">Username</label> */}
        {/* <input name="username" onChange={handleChange} id="username" placeholder="Username" /> */}
    
        <label class='label' htmlFor="email">Email</label>
        <p class="control has-icons-left has-icons-right">
            <input class="input" placeholder="Email" onChange={handleChange} type="email"  id="email" name="email"/>
            <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
            </span>
        </p>

{/*          
        <input  onChange={handleChange} type="password" id="password" name="password" />
        &nbsp; 
        <label htmlFor="confirm-password"> Confirm Password</label>
        <input  onChange={handleChange} type="confirm-password" id="confirm-password" name="confirm-password" /> */}
        <label htmlFor="password">Password</label>
        <div class="field">
            <p class="control has-icons-left">
                <input class="input" type="password" placeholder="Password" onChange={handleChange} id="password" name="password"/>
                    <span class="icon is-small is-left">
                        <i class="fa-solid fa-lock"></i>
                    
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