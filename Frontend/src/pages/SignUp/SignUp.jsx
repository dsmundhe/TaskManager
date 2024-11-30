import React, { useState } from "react";
import axios from "axios"; // Import Axios
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { FaGoogle, FaLinkedin, FaGithub } from "react-icons/fa"; // Combined import for icons
import PasswordIn from "../../components/PasswordIn/PasswordIn"; // Assuming PasswordIn is a custom component
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../components/Loader/Loader";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isLodaing, setIsLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!name || !email || !password) {
      toast.error("Please fill in all fields", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: "custom-toast",
      });
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://taskmanager-backend-nkb7.onrender.com/user/signup",
        {
          name,
          email,
          password,
        }
      );

      // On successful signup/login
      const { generatedToken, user } = response.data;

      // Save token and user data to localStorage
      localStorage.setItem("authToken", generatedToken);
      localStorage.setItem("userData", JSON.stringify(user));
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);

      if (response.data.result) {
        toast.success(response.data.msg || "Signup successful!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: "custom-toast",
        });

        // Reset form fields
        setName("");
        setEmail("");
        setPassword("");
        navigate("/home");
      } else {
        toast.error(response.data.msg || "Signup failed!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: "custom-toast",
        });
      }
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error("Try another Email ID!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: "custom-toast",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Navbar Component */}
      <Navbar />

      {/* Signup Form Container */}
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded px-7 py-10 bg-white shadow-lg">
          <form className="text-center space-y-6" onSubmit={handleSubmit}>
            {/* Header Section */}
            <h1 className="text-2xl font-semibold">Sign Up</h1>

            {/* Social Icons Section */}
            <div className="flex justify-center space-x-4">
              <span className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-500 hover:text-white transition duration-300 cursor-pointer">
                <FaGoogle />
              </span>
              <span className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-500 hover:text-white transition duration-300 cursor-pointer">
                <FaLinkedin />
              </span>
              <span className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-500 hover:text-white transition duration-300 cursor-pointer">
                <FaGithub />
              </span>
            </div>

            {/* Input Fields */}
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="relative">
                <PasswordIn
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* Toast Notifications */}
            <ToastContainer />

            {/* Signup Button */}
            <div>
              {isLodaing ? (
                <>
                  <Loader />
                </>
              ) : (
                <>
                  {" "}
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-2 rounded transition duration-300"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>

            {/* Redirect to Login */}
            <p className="text-xs mt-3">
              Already have an account?{" "}
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
