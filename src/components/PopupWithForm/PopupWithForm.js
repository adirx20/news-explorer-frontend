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
    handleOrButton,
    orButtonText,
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
                        {title}
                    </button>
                    <div className='form__or-button-container'>
                        <span className='form__or-button-prefix'>
                            or&nbsp;
                        </span>
                        <button
                            className='form__or-button'
                            onClick={handleOrButton}
                            type='button'
                        >
                            {orButtonText}
                        </button>

                    </div>
                </form>
            </div>
        </Popup>
    );
};

export default PopupWithForm;