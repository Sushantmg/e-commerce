import React, { useState, useEffect } from 'react';
import { ShoppingCartIcon, PhoneIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { UserIcon } from '@heroicons/react/24/outline';
import { FiShoppingBag } from 'react-icons/fi';
import Searchbar from './Searchbar';
import { useThemeContext } from '../context/ThemeContext';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const { darkMode, toggleTheme } = useThemeContext();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLogoutTooltip, setShowLogoutTooltip] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('ecom-token');
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('ecom-token');
        setIsLoggedIn(false);
        navigate('/login');  // redirect to login page on logout
    };

    return (
        <nav className="w-full px-6 py-4 bg-white dark:bg-gray-900 shadow-md sticky z-999 top-0 flex font-bold font-poppins items-center justify-between transition-colors duration-300">
            <NavLink to='/'>
                <div className="flex items-center space-x-2">
                    <FiShoppingBag className="text-green-500 text-3xl" />
                    <h1 className="text-3xl font-bold text-primary dark:text-green-300 font-logo">HAMRO MART</h1>
                </div>
            </NavLink>

            <div className="flex-1 mx-6">
                <Searchbar />
            </div>

            <div className="flex items-center space-x-6 text-primary dark:text-green-400">
                <div className="flex items-center space-x-1 text-sm">
                    <PhoneIcon className="h-6 w-6" strokeWidth={2} />
                    <span className="text-gray-600 dark:text-white">9814149723</span>
                </div>

                <NavLink to="/cart">
                    <ShoppingCartIcon
                        className="h-6 w-6 hover:text-green-500 cursor-pointer"
                        strokeWidth={2}
                    />
                </NavLink>

                {isLoggedIn ? (
                    <div
                        className="relative"
                        onMouseEnter={() => setShowLogoutTooltip(true)}
                        onMouseLeave={() => setShowLogoutTooltip(false)}
                    >
                        <UserIcon
                            onClick={handleLogout}
                            className="h-6 w-6 hover:text-green-500 cursor-pointer"
                            strokeWidth={2}
                            title="Log out"
                        />
                        {showLogoutTooltip && (
                            <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 bg-gray-700 text-white text-xs rounded px-2 py-1 whitespace-nowrap z-10">
                                Log out
                            </div>
                        )}
                    </div>
                ) : (
                    <NavLink
                        to="/login"
                        className="hover:text-green-500 font-semibold cursor-pointer"
                    >
                        Login
                    </NavLink>
                )}

                <button onClick={toggleTheme} className="focus:outline-none">
                    {darkMode ? (
                        <SunIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <MoonIcon className="h-6 w-6" strokeWidth={2} />
                    )}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
