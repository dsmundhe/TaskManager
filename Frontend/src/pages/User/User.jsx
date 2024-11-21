import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { FaBell, FaCog } from 'react-icons/fa'; // Changed moon and sun to cog for settings

const User = () => {
    const [logoutMessage, setLogoutMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const user = {
        name: 'James William',
        email: 'james@gmail.com',
        profilePicture: 'https://www.w3schools.com/w3images/avatar2.png',
    };

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        sessionStorage.removeItem('authToken');

        setLogoutMessage('Logged out successfully.');

        setTimeout(() => {
            setLogoutMessage('');
            navigate('/login');
        }, 2000);
    };

    return (
        <div className="bg-gray-100 text-gray-800">
            <Navbar />
            <div className="flex items-center justify-center min-h-screen p-4">
                <div
                    className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:text-gray-100 transition transform"
                >
                    {/* Profile Picture and Info */}
                    <div className="text-center space-y-6">
                        <div className="relative inline-block">
                            <img
                                src={user.profilePicture}
                                alt="Profile"
                                className="w-24 h-24 rounded-full mx-auto shadow-lg border-4 border-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-1"
                            />
                        </div>
                        <h1 className="text-2xl font-bold">{user.name}</h1>
                        <p>{user.email}</p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col gap-4 mt-6">
                        <Link to="/update-profile">
                            <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-green-400 text-white rounded-lg shadow-md hover:shadow-lg focus:ring-4 focus:ring-blue-300 transition">
                                Update Profile
                            </button>
                        </Link>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="w-full px-4 py-2 bg-gradient-to-r from-red-500 to-pink-400 text-white rounded-lg shadow-md hover:shadow-lg focus:ring-4 focus:ring-red-300 transition"
                        >
                            Logout
                        </button>
                        <Link to="/">
                            <button className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg shadow-md hover:shadow-lg focus:ring-4 focus:ring-gray-300 transition">
                                Go to Home
                            </button>
                        </Link>
                    </div>

                    {/* Logout Message */}
                    {logoutMessage && (
                        <div className="mt-4 text-center bg-green-100 text-green-600 font-medium py-2 px-4 rounded-lg shadow-md animate-fadeIn">
                            {logoutMessage}
                        </div>
                    )}

                    {/* Notification Bell and Settings Icon */}
                    <div className="flex justify-center mt-6 space-x-4">
                        <Link to="/notifications">
                            <button className="text-gray-500 hover:text-blue-500 p-2">
                                <FaBell size={24} />
                            </button>

                        </Link>
                        <Link to="/settings">
                            <button className="text-gray-500 hover:text-blue-500 p-2">
                                <FaCog size={24} />
                            </button>
                        </Link>
                    </div>

                    {/* Activity Stats */}
                    <div className="mt-8 p-4 bg-gray-50 rounded-lg shadow dark:bg-gray-700">
                        <h2 className="text-lg font-semibold">Your Activity</h2>
                        <div className="flex justify-between mt-4">
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-300">Total Tasks</p>
                                <h3 className="text-xl font-bold">12</h3>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600 dark:text-gray-300">Completed Tasks</p>
                                <h3 className="text-xl font-bold">8</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Logout Confirmation Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-96 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg transform scale-105">
                        <h2 className="text-xl font-semibold text-center">Confirm Logout</h2>
                        <p className="text-center mt-2">
                            Are you sure you want to log out?
                        </p>
                        <div className="flex justify-around mt-6">
                            <button
                                onClick={() => {
                                    setIsModalOpen(false);
                                    handleLogout();
                                }}
                                className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:ring-4 focus:ring-red-300 transition"
                            >
                                Yes, Logout
                            </button>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default User;
