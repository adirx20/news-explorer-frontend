import React from 'react';

function About() {
    return (
        <section className='about'>
            <img className='about__image' />
            <article className='about__text-container'>
                <h2 className='about__title'>About the author</h2>
                <p className='about__text'>
                    Text about myself.
                </p>
                <p className='about__text'>
                    Text about my skillset.
                </p>
            </article>
        </section>
    );
};

export default About;