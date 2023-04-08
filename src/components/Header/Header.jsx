import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-center'>
            <div className='flex gap-6 text-2xl font-semibold text-center'>
                <Link to='/'>Home</Link>
                <Link to='orders'>Orders</Link>
                <Link to='about'>About</Link>
                <Link to='contact'>Contact</Link>
            </div>
        </div>
    );
};

export default Header;