import React from 'react';

const AddeditNotes = ({ setopenaddIsShown }) => {
    const handleClose = () => {
        setopenaddIsShown({
            isShown: false,
            type: 'add',
            data: null
        });
    };

    return (
        <div className="p-4 bg-white rounded shadow-lg">
            <button
                className="text-red-500 hover:text-red-700 font-semibold"
                onClick={handleClose}
            >
                Close
            </button>
            <h1 className="text-lg font-bold mt-4">Yet to Edit!</h1>
            <p className="mt-2 text-gray-500">This is your note editor component.</p>
        </div>
    );
};

export default AddeditNotes;
