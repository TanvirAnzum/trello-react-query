import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Link className='header' to='/'>
            <h1>Project Management App</h1>
        </Link>
    );
};

export default Header;