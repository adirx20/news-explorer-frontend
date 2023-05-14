import React from 'react';
import './Popup.css';

function Popup({ isOpen, onClose, children }) {
    React.useEffect(() => {
        const handleEscape = (evt) => {
            if (evt.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);

        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    const handleBackgroundClick = (evt) => {
        if (evt.target === evt.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            onClick={handleBackgroundClick}
            className={`popup ${isOpen && 'popup_opened'}`}
        >
            {children}
        </div>
    );
}

export default Popup;