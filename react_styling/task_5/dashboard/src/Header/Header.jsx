import holbertonLogo from '../assets/holberton-logo.jpg'

function Header() {
    return (
        <div className="App-header flex flex-col sm:flex-row items-center border-b-2 border-[var(--main-color)] gap-2 sm:gap-4">
            <img src={holbertonLogo} alt="holberton logo" className="w-12 h-12 sm:w-16 sm:h-16" />
            <h1 className="text-[var(--main-color)] text-lg sm:text-xl lg:text-2xl text-center sm:text-left">School dashboard</h1>
        </div>
    );
}

export default Header;
