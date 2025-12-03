import WithLogging from '../HOC/WithLogging';

function Login() {
    return (
        <div className="App-login m-5 border-t-4 border-[var(--main-color)]">
            <p>Login to access the full dashboard</p>
            <label htmlFor="email">Email</label>
            <input type="email" name="user_email" id="email" className="mx-2.5" />
            <label htmlFor="password">Password</label>
            <input type="text" name="user_password" id="password" className="mx-2.5" />
            <button role="button" type="submit">OK</button>
        </div>
    );
}

export default WithLogging(Login);
