import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className='header'>
            <span className='header__site-title'>
                NewsExplorer
            </span>
            <button className='header__popup-button'></button>
        </header>
    );
};

export default Header;