// Header.jsx (or similar file)
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you use React Router
import { Shield } from 'lucide-react'; // Assuming you use lucide-react for icons

// Mock authentication/role for demonstration
const isAuthenticated = true; // Replace with actual context/state
const userRole = 'counsellor'; // Example role

const Header = () => {
    const navigate = useNavigate();

    // Dynamically generated navigation items based on authentication
    const navItems = [
        { name: 'Home', page: 'home' },
        { name: 'Resources', page: 'resources' },
        isAuthenticated && { name: 'Dashboard', page: 'dashboard' },
    ].filter(Boolean); // Filters out 'false' if isAuthenticated is false

    return (
        <header className="shadow-lg sticky top-0 z-10 transition-colors duration-300 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                
                {/* Logo and App Name */}
                <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('home')}>
                    <Shield className="h-8 w-8 text-indigo-600 dark:text-indigo-400" /> 
                    <span className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">SafeSpace</span>
                </div>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-4">
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => navigate(item.page)}
                            className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors"
                        >
                            {item.name}
                        </button>
                    ))}
                </nav>

                {/* Mobile Navigation (Placeholder) */}
                {/* <nav className="flex items-center space-x-4 md:hidden">
                    // {/* TODO: This would hold a hamburger icon */}
                {/* </nav> */}

            </div>
        </header>
    );
};

export default Header;
