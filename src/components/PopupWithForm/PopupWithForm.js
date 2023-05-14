import React from 'react';
import './PopupWithForm.css';
import Popup from '../Popup/Popup';
import closeIcon from '../../images/popup-close-icon-white.svg';

function PopupWithForm({
    isOpen,
    onClose,
    onSubmit,
    title,
    type,
    name,
    buttonText,
    children
}) {
    function handleSubmit(evt) {
        evt.preventDefault();
        onSubmit();
    }

    return (
        <Popup
            isOpen={isOpen}
            onClose={onClose}
        >
            <div className="form">
                <form
                    type="submit"
                    onSubmit={handleSubmit}
                >
                    <button
                        className="form__close-button"
                        type="button"
                        onClick={onClose}
                    >
                        <img
                            className="form__close-icon"
                            src={closeIcon}
                            alt="X closing button"
                        />
                    </button>
                    <h2 className="form__title">
                        {title}
                    </h2>
                    <div className='form__content'>
                        {children}
                    </div>
                    <button
                        className='form__submit-button'
                        type="submit"
                    >
                        {name}
                    </button>
                </form>
            </div>
        </Popup>
    );
};

export default PopupWithForm;