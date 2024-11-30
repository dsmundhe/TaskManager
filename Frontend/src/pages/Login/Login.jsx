import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaLinkedin, FaGithub } from "react-icons/fa";
import PasswordIn from "../../components/PasswordIn/PasswordIn";
import axios from "axios";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../components/Loader/Loader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [isLodaing, setIsLoading] = useState(false);

  // Simple email validation regex
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    // Clear previous error
    setError(null);

    // Validation checks
    if (!email || !password || !name) {
      setIsLoading(false);
      toast.error("Please fill all the fields", {
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

    if (!validateEmail(email)) {
      setIsLoading(false);
      toast.error("Please enter a valid email", {
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

    try {
      setIsLoading(false);
      const response = await axios.post("http://localhost:5000/user/login", {
        email,
        password,
      });

      if (response.data.result) {
        const { generatedToken, user } = response.data;

        // Save token and user data to localStorage
        localStorage.setItem("authToken", generatedToken);
        localStorage.setItem("userData", JSON.stringify(user));
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);

        // Show success message
        toast.success("Login successful", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: "custom-toast",
        });

        // Clear form fields after login
        setName("");
        setEmail("");
        setPassword("");

        // Redirect to home page
        navigate("/home");
      } else {
        setIsLoading(false);
        toast.error("Invalid email or password", {
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
      setIsLoading(false);
      toast.error("Error during login. Please try again", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: "custom-toast",
      });
    }
  };

  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center mt-28 bg-dark-100">
        <div className="w-96 border rounded px-7 py-10 bg-white shadow-2xl">
          <form className="text-center space-y-6" onSubmit={handleSubmit}>
            <h1 className="text-2xl font-semibold">Login</h1>

            <div className="flex justify-center space-x-4">
              <span className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#08C2FF] hover:text-white transition duration-300 cursor-pointer">
                <FaGoogle />
              </span>
              <span className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#08C2FF] hover:text-white transition duration-300 cursor-pointer">
                <FaLinkedin />
              </span>
              <span className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#08C2FF] hover:text-white transition duration-300 cursor-pointer">
                <FaGithub />
              </span>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="w-full border rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="relative">
                <input
                  type="text"
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

            <ToastContainer className="toastContainer" />
            <p className="text-xs text-red-600">{error}</p>

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
                    className="bg-[rgb(84,84,219)] hover:bg-[#08C2FF] text-white px-10 py-2 rounded transition duration-300"
                  >
                    Login
                  </button>
                </>
              )}
            </div>

            <p className="text-xs mt-3">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
