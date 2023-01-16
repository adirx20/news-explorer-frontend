import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <span className='footer__watermark'>
                &copy; {new Date().getFullYear()} Supersite, Powered by News API
            </span>
            <nav className='footer__navigation'>
                <div className='footer__link-container'>
                    <div className='footer__text-link-container'>
                        <a className='footer__link'
                            href='/'>
                            Home
                        </a>
                        <a className='footer__link'
                            href='https://practicum.com/en-isr/'
                            target='_blank'
                            >
                            Practicum
                        </a>
                    </div>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;