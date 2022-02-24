import React, { useState } from 'react';
//import { Axios } from 'axios';
import './RegistrationForm.css';
import { API_BASE_URL } from '../../constants/apiConstants';


 function RegistrationForm(props) {
    const [FirstName,setFirstName]=useState("");
    const [LastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")


     const handleSubmitClick = () => {
        const register = {
            first_name: FirstName,
            last_name: LastName,
            email: email,
            password: password
            }
        fetch(`${API_BASE_URL.root}/users/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(register)
        })
        .then( alert (`User is registered`))
        .catch(err=>alert(err))
    }
        
      
    const redirectToLogin = () => {
        props.history.push('/login');
        props.updateTitle('Login');
    }

    
    return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputFirstName1">First Name</label>
                    <input type="text"
                        name="FirstName"
                        className="form-control"
                        id="FirstName"
                        aria-describedby="FirstNameHelp"
                        placeholder="First Name"
                        value={FirstName}
                        onChange={e=>setFirstName(e.target.value)} 
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputLastName1">Last Name</label>
                    <input type="text"
                        name="LastName"
                        className="form-control"
                        id="LastName"
                        aria-describedby="LastNameHelp"
                        placeholder="Last Name"
                        value={LastName}
                        onChange={e=>setLastName(e.target.value)} 
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value={email}
                        onChange={e=>setEmail(e.target.value)} 
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password"
                        name="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={e=>setPassword(e.target.value)} 
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >
                    Register
                </button>
            </form>
            <div className="mt-2">
                <span>Already have an account? </span>
                <span className="loginText" onClick={() => redirectToLogin()}>Login here</span>
            </div>
        </div>
    )
}
export default RegistrationForm

