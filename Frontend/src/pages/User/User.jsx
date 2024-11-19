import React from 'react';
import Navbar from '../../components/Navbar/Navbar'; 
import { Link, useNavigate } from 'react-router-dom'; 

const User = () => {
    
    const user = {
        name: 'John',
        email: 'john@example.com',
        profilePicture: 'https://www.w3schools.com/w3images/avatar2.png', 
    };
    const navigate = useNavigate();

    const handleLogout = () => {
     
        localStorage.removeItem('authToken');
        sessionStorage.removeItem('authToken');

        navigate('/login');
    };

    return (
        <>
           
         <Navbar />
            <div className="flex items-center justify-center mt-20">
                <div className="w-96 border rounded-lg px-8 py-10 bg-white shadow-lg">

              
                    <div className="text-center space-y-6">

                        <div>
                            <img
                                src={user.profilePicture}
                                alt="Profile"
                                className="w-24 h-24 rounded-full mx-auto"
                            />
                        </div>
                        <div>
                            <h1 className="text-2xl font-semibold">{user.name}</h1>
                            <p className="text-gray-600">{user.email}</p>
                        </div>
                        <div>
                            <Link to="/update-profile">
                                <button className="button-primary">
                                    Update Profile
                                </button>
                            </Link>
                        </div>

                        <div>
                            <button
                                className="button-secondary"
                                onClick={handleLogout} 
                            >
                                Logout
                            </button>
                        </div>
                        <div>
                            <Link to="/">
                                <button className="button-secondary">
                                    Go to Home
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default User;
