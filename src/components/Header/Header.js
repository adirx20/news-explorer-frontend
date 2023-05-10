import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header({ children }) {
    const navigate = useNavigate();

    return (
        <header className='header'>
            <span
                className='header__site-title'
                onClick={
                    () => navigate('/')
                }
            >
                NewsExplorer
            </span>
            {children}
            {/* <button
                className='header__popup-button'
                role='button'
                aria-label='Home'
            >
                Home
            </button> */}
        </header>
    );
};

export default Header;