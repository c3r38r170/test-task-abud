import React from 'react';
import Nav from './Nav';

const Header = ({children}) => {
    return (
        <div className="md:flex md:flex-wrap sticky top-2 z-10 p-4 md:pb-0 mx-4 my-2 bg-gradient-to-br from-orange-400 to-amber-400 rounded">
            <h1 className="text-3xl font-bold mb-6 md:flex-1">{children}</h1>
            <Nav />
        </div>
    );
};

export default Header;