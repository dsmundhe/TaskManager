import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SignUp = () => {
    return (
        <>
            {/* Navbar Component */}
            <Navbar />

            {/* Signup Form Container */}
            <div className="flex items-center justify-center mt-28">
                <div className="w-96 border rounded px-7 py-10 bg-white shadow-lg">

                    {/* Signup Form */}
                    <form className="text-center space-y-6">

                        {/* Header Section */}
                        <div>
                            <h1 className="text-2xl font-semibold">Sign Up</h1>
                        </div>

                        {/* Social Icons Section */}
                        <div className="flex justify-center space-x-4">
                            {/* Replace Icons with actual icons or social login buttons */}
                            <span className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-500 hover:text-white transition duration-300">
                                <FaGoogle />
                            </span>
                            <span className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-500 hover:text-white transition duration-300">
                                <FaLinkedin />
                            </span>
                            <span className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-500 hover:text-white transition duration-300">
                                <FaGithub />
                            </span>
                        </div>

                        {/* Input Fields */}
                        <div className="space-y-4">

                            {/* Name Input */}
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full border rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            {/* Email Input */}
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    className="w-full border rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            {/* Password Input */}
                            <div className="relative">
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    required
                                    className="w-full border rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                        </div>

                        {/* Signup Button */}
                        <div>
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-2 rounded transition duration-300"
                            >
                                Sign Up
                            </button>
                        </div>

                        {/* Login Redirect */}
                        <p className="text-xs mt-3">
                            Already have an account?{' '}
                            <Link to="/login" className="text-blue-500 hover:underline">
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignUp; 