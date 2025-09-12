import React from "react";
import "./Login.css"

export default function Login() {
    
    return (
        <div className="App-body_container">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <button onClick={() => alert('Login clicked')}>OK</button>
        </div>
    )
}