import React from 'react';
import { ShoppingCartIcon, PhoneIcon, UserIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { FiShoppingBag } from 'react-icons/fi'; // <-- import icon here
import Searchbar from './Searchbar';
import { useThemeContext } from '../context/ThemeContext';

const Navbar = () => {
    const { darkMode, toggleTheme } = useThemeContext();

    return (
        <nav className="w-full px-6 py-4 bg-white dark:bg-gray-900 shadow-md sticky z-999 top-0 flex font-bold font-poppins items-center justify-between transition-colors duration-300">
            <div className="flex items-center space-x-2">
                <FiShoppingBag className="text-green-500 text-3xl" />
                <h1 className="text-3xl font-bold text-primary dark:text-green-300 font-logo">HAMRO MART</h1>
            </div>

            <div className="flex-1 mx-6">
                <Searchbar />
            </div>

            <div className="flex items-center space-x-6 text-primary dark:text-green-400">
                <div className="flex items-center space-x-1 text-sm">
                    <PhoneIcon className="h-6 w-6" strokeWidth={2} />
                    <span className='text-gray-600 dark:text-white'>9814149723</span>
                </div>

                <ShoppingCartIcon className="h-6 w-6 hover:text-green-500 cursor-pointer" strokeWidth={2} />
                <UserIcon className="h-6 w-6 hover:text-green-500 cursor-pointer" strokeWidth={2} />

                <button onClick={toggleTheme} className="focus:outline-none">
                    {darkMode ? <SunIcon className="h-6 w-6" strokeWidth={2} /> : <MoonIcon className="h-6 w-6" strokeWidth={2} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
