import React, { Component } from "react";

class Nav extends Component {
    render() {
        return (
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/register">Register</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/login">Login</a>
                </li>
            </ul>
        )
    };
}
export default Nav
