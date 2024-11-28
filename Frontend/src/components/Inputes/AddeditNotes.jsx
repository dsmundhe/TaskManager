import React, { useState, useEffect } from 'react';

const AddeditNotes = ({ setopenaddIsShown }) => {
    const [currentTime, setCurrentTime] = useState('');

    // Function to update the current time
    const updateTime = () => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedTime = `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')} ${ampm}`;
        setCurrentTime(formattedTime);
    };

    // Set up interval to update time every second
    useEffect(() => {
        updateTime(); // Update immediately on mount
        const timer = setInterval(updateTime, 1000);

        // Cleanup the interval on component unmount
        return () => clearInterval(timer);
    }, []);

    const handleClose = () => {
        setopenaddIsShown({
            isShown: false,
            type: 'add',
            data: null,
        });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 p-4">
            {/* Responsive Modal Container */}
            <div className="w-full max-w-lg sm:max-w-md p-4 bg-white rounded-lg shadow-lg relative">
                {/* Close Button */}
                <button
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                    onClick={handleClose}
                >
                    ✖
                </button>

                {/* Real-Time Clock */}
                <p className="text-sm text-gray-500">{currentTime}</p>

                {/* Editable Title */}
                <div className="mt-2">
                    <input
                        type="text"
                        placeholder="Enter title"
                        className="w-full text-lg font-semibold text-gray-800 border-b border-gray-300 focus:outline-none focus:border-purple-500"
                    />
                </div>

                {/* Content */}
                <div className="mt-4">
                    <p className="text-xs text-gray-500 mb-1">CONTENT</p>
                    <textarea
                        className="w-full h-24 p-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder="COMMENT"
                    />
                </div>

                {/* Tags */}
                <div className="mt-4">
                    <p className="text-xs text-gray-500 mb-1">TAGS</p>
                    <div className="flex flex-wrap items-center gap-2">
                        <input
                            type="text"
                            placeholder="Add tags"
                            className="flex-grow p-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <button className="w-8 h-8 bg-blue-100 text-blue-500 rounded-lg flex items-center justify-center hover:bg-blue-200">
                            +
                        </button>
                    </div>
                </div>

                {/* Add Button */}
                <button
                    className="w-full mt-4 py-2 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600"
                >
                    ADD
                </button>
            </div>
        </div>
    );
};

export default AddeditNotes;
