import React from 'react';

const Hashtag = ({ children, onClick }) => {
    return (
        <p 
            onClick={onClick} 
            className="select-none text-blue-500 font-bold cursor-pointer p-1"
        >
            #{children}
        </p>
    );
};

export default Hashtag;