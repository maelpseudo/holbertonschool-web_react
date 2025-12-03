import holbertonLogo from '../assets/holberton-logo.jpg'

function Header() {
    return (
        <div className="flex flex-col items-center gap-3 py-6 sm:flex-row sm:justify-center sm:gap-6">
            <img src={holbertonLogo} alt="holberton logo" className="w-40 sm:w-48" />
            <h1 className="text-4xl sm:text-5xl font-bold text-[#e0003c] text-center sm:text-left">School dashboard</h1>
        </div>
    );
}

export default Header;
