import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';

function Main() {
    return (
        <section className='main'>
            <div className='main__form-container'>
                <h1 className='main__title'>What's going on in the world?</h1>
                <p className='main__description'>Find the latest news on any topic and save them in your personal account.</p>
                {/* search form component */}
                <SearchForm />
                
            </div>
            {/* news card list component with the loop to create cards from new card component */}
            <NewsCardList />
            {/* about component */}
            <About />
        </section>
    );
};

export default Main;