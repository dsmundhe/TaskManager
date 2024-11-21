import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { FaBell, FaCog } from 'react-icons/fa';

const User = () => {
    const [logoutMessage, setLogoutMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false); // To control the settings modal visibility
    const [newPassword, setNewPassword] = useState(''); // State for password
    const [confirmPassword, setConfirmPassword] = useState(''); // State for confirming password

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

    const handleSaveSettings = () => {
        if (newPassword === confirmPassword) {
            // Handle password change logic here
            console.log('Password changed successfully');
            setIsSettingsOpen(false); // Close modal after saving
        } else {
            alert('Passwords do not match');
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />
            <div className="container mx-auto px-4 lg:px-0 py-10">
                <div className="flex flex-col lg:flex-row lg:items-start justify-center gap-8">
                    {/* Profile Card */}
                    <div className="bg-white rounded-lg shadow-lg p-6 w-full lg:max-w-sm relative">
                        {/* Settings Icon */}
                        <div className="absolute top-4 left-4">
                            <button
                                onClick={() => setIsSettingsOpen(true)}
                                className="text-gray-600 hover:text-gray-800 transition-all duration-300"
                            >
                                <FaCog size={24} />
                            </button>
                        </div>
                        <div className="text-center">
                            <img
                                src={user.profilePicture}
                                alt="Profile"
                                className="w-32 h-32 mx-auto rounded-full shadow-md border-4 border-transparent"
                                style={{
                                    background: 'linear-gradient(45deg, #6a11cb, #2575fc)',
                                }}
                            />
                            <h1 className="text-xl font-bold text-gray-800 mt-4">{user.name}</h1>
                            <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                        <div className="mt-6 space-y-4">
                            <Link to="/update-profile">
                                <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 ease-in-out">
                                    Update Profile
                                </button>
                            </Link>
                            <div className="mt-4">
                                <Link to="/">
                                    <button className="w-full py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 ease-in-out">
                                        Go to Home
                                    </button>
                                </Link>
                            </div>
                            <div className="mt-4">
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="w-full py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 ease-in-out"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
<<<<<<< HEAD
                        {/* Logout Message */}
                        {logoutMessage && (
                            <div className="mt-4 text-center text-green-700 bg-green-100 py-2 rounded">
                                {logoutMessage}
                            </div>
                        )}
=======
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
>>>>>>> 8924e0ae16f6fa031b9bdfccd7230324c30453ba
                    </div>

                    {/* Activity Section */}
                    <div className="flex-1 space-y-8">
                        {/* Activity Card */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl font-semibold text-gray-800">Your Activity</h2>
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div className="text-center">
                                    <p className="text-sm text-gray-600">Total Tasks</p>
                                    <h3 className="text-xl font-bold text-gray-800">12</h3>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm text-gray-600">Completed Tasks</p>
                                    <h3 className="text-xl font-bold text-gray-800">8</h3>
                                </div>
                                <div className="text-center">
                                    <p className="text-sm text-gray-600">Pending Tasks</p>
                                    <h3 className="text-xl font-bold text-gray-800">4</h3>
                                </div>
                            </div>
                        </div>

                        {/* Achievements Card */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl font-semibold text-gray-800">Achievements</h2>
                            <div className="flex flex-wrap gap-4 mt-4">
                                <span className="bg-blue-100 text-blue-700 py-1 px-4 rounded-lg">Task Master</span>
                                <span className="bg-green-100 text-green-700 py-1 px-4 rounded-lg">Goal Getter</span>
                                <span className="bg-yellow-100 text-yellow-700 py-1 px-4 rounded-lg">Time Saver</span>
                                <span className="bg-purple-100 text-purple-700 py-1 px-4 rounded-lg">Innovator</span>
                                <span className="bg-red-100 text-red-700 py-1 px-4 rounded-lg">Leader</span>
                            </div>
                        </div>

                        {/* Upcoming Tasks Card */}
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h2 className="text-xl font-semibold text-gray-800">Upcoming Tasks</h2>
                            <ul className="list-disc pl-5 mt-4">
                                <li>Complete "Task 3" - Due on Friday</li>
                                <li>Review "Task 4" - Due on Monday</li>
                                <li>Prepare for the meeting - Due on Wednesday</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Settings Modal */}
            {isSettingsOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-xl p-6 w-11/12 max-w-sm">
                        <h2 className="text-lg font-semibold text-center text-gray-800">
                            Change Password
                        </h2>
                        <div className="mt-4">
                            <label htmlFor="new-password" className="text-gray-600">New Password</label>
                            <input
                                type="password"
                                id="new-password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="confirm-password" className="text-gray-600">Confirm Password</label>
                            <input
                                type="password"
                                id="confirm-password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full p-2 mt-2 border border-gray-300 rounded-lg"
                            />
                        </div>
                        <div className="flex justify-between mt-6">
                            <button
                                onClick={handleSaveSettings}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out"
                            >
                                Save
                            </button>
                            <button
                                onClick={() => setIsSettingsOpen(false)}
                                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition-all duration-300 ease-in-out"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Logout Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-xl p-6 w-11/12 max-w-sm">
                        <h2 className="text-lg font-semibold text-center text-gray-800">
                            Confirm Logout
                        </h2>
                        <p className="text-gray-600 text-center mt-2">
                            Are you sure you want to log out?
                        </p>
                        <div className="flex justify-between mt-6">
                            <button
                                onClick={() => {
                                    setIsModalOpen(false);
                                    handleLogout();
                                }}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out"
                            >
                                Yes, Logout
                            </button>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition-all duration-300 ease-in-out"
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
