import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCog } from "react-icons/fa";
import Navbar from "../../components/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const User = () => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const navigate = useNavigate();

  const authToken = localStorage.getItem("authToken"); // Retrieves the token
  const name = localStorage.getItem("name"); // Retrieves the name
  const email = localStorage.getItem("email"); // Retrieves the email

  const user = {
    name: "James William",
    email: "james@gmail.com",
    phone: "9867564320", // Added phone number
    profilePicture: "https://www.w3schools.com/w3images/avatar2.png",
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    sessionStorage.removeItem("authToken");
    setIsLogoutModalOpen(false);
    toast.success("Logging out Successfuly!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: "custom-toast",
    });
    setTimeout(() => {
      navigate("/login");
    }, 500);
  };

  const handleProfileUpdate = () => {
    // Logic to update profile
    alert("Profile updated!");
    setIsProfileModalOpen(false);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    // Logic for password change
    alert("Password changed successfully!");
    setIsSettingsModalOpen(false);
  };

  return (
    <div>
      <ToastContainer className="toastContainer" />

      <Navbar />
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 lg:px-0 py-10">
          <div className="flex flex-col lg:flex-row lg:items-start justify-center gap-8">
            {/* Profile Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 w-full lg:max-w-sm relative">
              <button
                onClick={() => setIsSettingsModalOpen(true)}
                className="absolute top-4 left-4 bg-gray-200 text-gray-800 p-2 rounded-full hover:bg-gray-300 transition-all duration-300"
              >
                <FaCog size={20} />
              </button>

              <div className="text-center">
                <img
                  src={user.profilePicture}
                  alt="Profile"
                  className="w-32 h-32 mx-auto rounded-full shadow-md border-4 border-transparent"
                  style={{
                    background: "linear-gradient(45deg, #6a11cb, #2575fc)",
                  }}
                />
                <h1 className="text-xl font-bold text-gray-800 mt-4">{name}</h1>
                <p className="text-sm text-gray-500">{email}</p>
                {/* Added phone number */}
              </div>
              <div className="mt-6 space-y-4">
                <button
                  onClick={() => setIsProfileModalOpen(true)}
                  className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out"
                >
                  Update Profile
                </button>
                <div className="mt-4">
                  <Link to="/home">
                    <button className="w-full py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 ease-in-out">
                      Go to Home
                    </button>
                  </Link>
                </div>
                <div className="mt-4">
                  <button
                    onClick={async () => {
                      setIsLogoutModalOpen(true);
                      handleLogout();
                    }}
                    className="w-full py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 ease-in-out"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>

            {/* Activity Section */}
            <div className="flex-1 space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold text-gray-800">
                  Your Activity
                </h2>
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

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold text-gray-800">
                  Achievements
                </h2>
                <div className="flex flex-wrap gap-4 mt-4">
                  <span className="bg-blue-100 text-blue-700 py-1 px-4 rounded-lg">
                    Task Master
                  </span>
                  <span className="bg-green-100 text-green-700 py-1 px-4 rounded-lg">
                    Goal Getter
                  </span>
                  <span className="bg-yellow-100 text-yellow-700 py-1 px-4 rounded-lg">
                    Time Saver
                  </span>
                  <span className="bg-purple-100 text-purple-700 py-1 px-4 rounded-lg">
                    Innovator
                  </span>
                  <span className="bg-red-100 text-red-700 py-1 px-4 rounded-lg">
                    Leader
                  </span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold text-gray-800">
                  Upcoming Tasks
                </h2>
                <ul className="list-disc pl-5 mt-4">
                  <li>Complete "Task 3" - Due on Friday</li>
                  <li>Review "Task 4" - Due on Monday</li>
                  <li>Prepare for the meeting - Due on Wednesday</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Logout Confirmation Modal */}
        {isLogoutModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl p-6 w-11/12 max-w-sm">
              <h2 className="text-lg font-semibold text-gray-800 text-center">
                Are you sure you want to logout?
              </h2>
              <div className="flex justify-around mt-6">
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
                >
                  Yes, Logout
                </button>
                <button
                  onClick={() => setIsLogoutModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition-all duration-300"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Profile Update Modal */}
        {isProfileModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl p-6 w-11/12 max-w-sm">
              <h2 className="text-lg font-semibold text-gray-800 text-center">
                Update Profile
              </h2>
              <form className="mt-4 space-y-4">
                <div>
                  <label className="block text-sm text-gray-600">Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600">Phone</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    onClick={handleProfileUpdate}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setIsProfileModalOpen(false)}
                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Settings Modal */}
        {isSettingsModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl p-6 w-11/12 max-w-sm">
              <h2 className="text-lg font-semibold text-gray-800 text-center">
                Change Password
              </h2>
              <form onSubmit={handlePasswordChange} className="mt-4 space-y-4">
                <div>
                  <label className="block text-sm text-gray-600">
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter your current password"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter your new password"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Confirm your new password"
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
                  >
                    Change Password
                  </button>
                  <button
                    onClick={() => setIsSettingsModalOpen(false)}
                    className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
