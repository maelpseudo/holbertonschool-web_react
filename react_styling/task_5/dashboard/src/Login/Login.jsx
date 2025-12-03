import WithLogging from '../HOC/WithLogging';

function Login() {
    return (
        <div className="App-login m-5 border-t-4 border-[var(--main-color)]">
            <p className="mb-4">Login to access the full dashboard</p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
                <label htmlFor="email" className="text-sm sm:text-base">Email</label>
                <input type="email" name="user_email" id="email" className="w-full sm:w-auto px-2 py-1 border rounded" />
                <label htmlFor="password" className="text-sm sm:text-base">Password</label>
                <input type="text" name="user_password" id="password" className="w-full sm:w-auto px-2 py-1 border rounded" />
                <button role="button" type="submit" className="w-full sm:w-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">OK</button>
            </div>
        </div>
    );
}

export default WithLogging(Login);
