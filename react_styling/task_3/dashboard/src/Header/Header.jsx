import holbertonLogo from '../assets/holberton-logo.jpg'

function Header() {
    return (
        <div className="App-header flex items-center border-b-2 border-[var(--main-color)]">
            <img src={holbertonLogo} alt="holberton logo" />
            <h1 className="text-[var(--main-color)]">School dashboard</h1>
        </div>
    );
}

export default Header;
