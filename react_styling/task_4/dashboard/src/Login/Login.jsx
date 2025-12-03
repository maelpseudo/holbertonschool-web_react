import WithLogging from '../HOC/WithLogging';

function Login() {
    return (
        <div className="w-full max-w-xl mx-auto px-4 sm:px-6 md:px-8">
            <p className="text-base sm:text-lg mb-4">Login to access the full dashboard</p>
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
                <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="email" className="text-sm sm:text-base">Email</label>
                    <input type="email" name="user_email" id="email" className="border border-gray-500 rounded px-2 py-1 w-full" />
                </div>
                <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="password" className="text-sm sm:text-base">Password</label>
                    <input type="text" name="user_password" id="password" className="border border-gray-500 rounded px-2 py-1 w-full" />
                </div>
                <button role="button" type="submit" className="mt-2 md:mt-6 border border-gray-600 px-3 py-2 rounded bg-white">OK</button>
            </div>
        </div>
    );
}

export default WithLogging(Login);
