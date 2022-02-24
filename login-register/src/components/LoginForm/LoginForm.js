import React, { useState } from 'react';
import './LoginForm.css';
import { API_BASE_URL } from '../../constants/apiConstants';

function LoginForm(props) {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")


     const handleSubmitClick = () => {
        const register = {
            email: email,
            password: password
            }
        fetch(`${API_BASE_URL.root}/users/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(register)
        })
        .then(res=>res.json().then(result=>alert(`Account is logedin whit token: `+result.token)))
    .catch(err=>alert(err))
    }
    const redirectToRegister = () => {
        props.history.push('/register');
        props.updateTitle('Register');
    }
    return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
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
                <div className="form-check">
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >Login</button>
            </form>
        
            <div className="registerMessage">
                <span>Dont have an account? </span>
                <span className="loginText" onClick={() => redirectToRegister()}>Register</span>
            </div>
        </div>
    )
}



export default LoginForm