import { useRef } from 'react';
import './Login.css';

function Login() {
    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);

    const focusInput = (inputRef) => () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div className="App-login">
            <p>Login to access the full dashboard</p>
            <label htmlFor="email" onClick={focusInput(emailInputRef)}>Email</label>
            <input type="email" name="user_email" id="email" ref={emailInputRef} />
            <label htmlFor="password" onClick={focusInput(passwordInputRef)}>Password</label>
            <input type="password" name="user_password" id="password" ref={passwordInputRef} />
            <button role="button" type="submit">OK</button>
        </div>
    );
}

export default Login;
