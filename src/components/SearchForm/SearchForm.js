import React from 'react';

function SearchForm() {
    return (
        <form className='search-form'>
            <input
                className='search-from__input'
                type='text'
                placeholder='Enter topic'
            />
            <button
                className='search-from__button'
                type='submit'>
                Search
            </button>
        </form>
    );
};

export default SearchForm;