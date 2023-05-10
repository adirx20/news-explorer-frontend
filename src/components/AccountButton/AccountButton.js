import React from 'react';
import signOutIconBlack from '../../images/signout-icon_black.svg';
import signOutIconWhite from '../../images/signout-icon_white.svg';
import './AccountButton.css';

function AccountButton({ loggedIn }) {
    return loggedIn ? (
        <button className='account-button'>
            <span>
                Username
            </span>
            <img src={signOutIconBlack} />
        </button>
    ) : (
        <button className='account-button'>
            <span>
                Sign In
            </span>
        </button>
    );
};

export default AccountButton;