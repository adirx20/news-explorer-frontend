import React from 'react';
import './SavedNewsHeader.css';

function SavedNewsHeader() {
    return (
        <div className='saved-news-header'>
            <p className='saved-news-header__subtitle'>
                Saved articles
            </p>
            <h2 className='saved-news-header__title'>
                Elise, you have 5 saved articles
            </h2>
            <p className='saved-news-header__text'>
                By keywords:&nbsp;
                <span className='saved-news-header__keywords'>
                    Nature, Yellowstone, and 2 other
                </span>
            </p>
        </div>
    );
};

export default SavedNewsHeader;