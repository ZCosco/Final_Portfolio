import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function Navbar() {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const signOut = () => {
        logout();
    };

    const signIn = () => {
        loginWithRedirect();
    };

    return (
        <nav className="flex items-center justify-center bg-gray-800 text-white p-4">
            <div className="flex items-center flex-shrink-0">
                <Link to="https://www.codewars.com/users/ZCosco/" className="font-semibold text-xl tracking-tight"><img src="https://www.codewars.com/users/ZCosco/badges/large" ></img></Link>
            </div>
            <div className=" items-center justify-center ml-10 flex">
                <div className="flex space-x-8">
                    <Link to="/" className="text-black bg-white px-6 py-3 rounded hover:bg-black hover:text-white">Home</Link>
                    <Link to="/dashboard" className="text-black bg-white px-8 py-3 rounded hover:bg-black hover:text-white">Current Projects</Link>
                    <Link to="/CodingTemple" className="text-black bg-white px-8 py-3 rounded hover:bg-black hover:text-white">Coding Temple Projects</Link>
                    {isAuthenticated ? (
                        <button onClick={signOut} className="text-black bg-white px-8 py-3 rounded hover:bg-black hover:text-white">Sign Out</button>
                    ) : (
                        <button onClick={signIn} className="text-black bg-white px-8 py-3 rounded hover:bg-black hover:text-white">Login</button>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
