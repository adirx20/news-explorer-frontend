import React from 'react';
import './Header.css';

function Header({ children }) {
    return (
        <header className='header'>
            <span className='header__site-title'>
                NewsExplorer
            </span>
            {children}
            <button className='header__popup-button'>Home</button>
        </header>
    );
};

export default Header;