import React from 'react';
import signOutIconBlack from '../../images/signout-icon_black.svg';
import signOutIconWhite from '../../images/signout-icon_white.svg';
import './AccountButton.css';

function AccountButton({ loggedIn, onClick }) {
    return loggedIn ? (
        <button
            className='account-button'
            onClick={onClick}
        >
            <span>
                Username
            </span>
            <img src={signOutIconBlack} />
        </button>
    ) : (
        <button
            className='account-button'
            onClick={onClick}
        >
            <span>
                Sign In
            </span>
        </button>
    );
};

export default AccountButton;