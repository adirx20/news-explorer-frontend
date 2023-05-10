import React from 'react';
import { useNavigate } from 'react-router';
import './Navigation.css';

function Navigation() {
    const navigate = useNavigate();

    function navigateToMain() {
        navigate('/');
        // onClose
    }

    function navigateToSavedNews() {
        navigate('/saved-news');
        // onClose
    }

    return (
        <nav className='navigation'>
            <button
                className='navigation__menu-button'
                onClick={navigateToMain}
            >
                Home
            </button>
            <button
                className='navigation__menu-button'
                onClick={navigateToSavedNews}
            >
                Saved News
            </button>
        </nav>
    );
};

export default Navigation;