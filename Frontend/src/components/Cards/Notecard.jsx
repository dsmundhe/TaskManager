import React from 'react';
import './Notecard.css'
const Notecard = ({
    title,
    date,
    content,
    tags,
    isPinned,
    onEdit,
    onDelete,
    onPinnote,
}) => {
    return (
        <div className="w-full max-w-sm mx-auto border rounded-lg shadow-md bg-white p-4 px-4 hover:shadow-lg transition-shadow notecard">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <button
                    onClick={onPinnote}
                    className={`text-sm ${isPinned ? 'text-yellow-500' : 'text-gray-500'
                        }`}
                >
                    {isPinned ? '📌 Pinned' : '📍 Pin'}
                </button>
            </div>
            <p className="text-sm text-gray-500 mb-4">{date}</p>
            <p className="text-gray-700 mb-4">{content}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="bg-blue-100 text-blue-500 px-2 py-1 text-xs rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <div className="flex justify-end space-x-3">
                <button
                    onClick={onEdit}
                    className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
                >
                    Edit
                </button>
                <button
                    onClick={onDelete}
                    className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Notecard;
