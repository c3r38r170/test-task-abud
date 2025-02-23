import React from 'react';
import NavLink from './NavLink';

const Nav = () => {
    return (
        <nav>
            <ul className="flex md:block">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
            </ul>
        </nav>
    );
};

export default Nav;