import holbertonLogo from '../assets/holberton-logo.jpg'
import './Header.scss';

function Header() {
    return (
        <div className="App-header">
            <img src={holbertonLogo} alt="holberton logo" />
            <h1>School dashboard</h1>
            <h4>Log in to continue</h4>
        </div>
    );
}

export default Header;
