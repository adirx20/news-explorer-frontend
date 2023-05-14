import React from 'react';
import './FormInput.css';

function FormInput({
    type,
    name,
    placeholder,
    setIsValid,
    setValues,
    values,
    isOpen
}) {
    const [value, setValue] = React.useState('');

    const handleChange = (evt) => {
        setValue(evt.target.value);
        setValues({ ...values, [evt.target.name]: evt.target.value });
    };

    return (
        <div className='form__input-container'>
            <span className={`form__input-title form__input-${name.toLowerCase()}`}>
                {name}
            </span>
            <input
                className='form__input'
                onChange={handleChange}
                value={value}
                type={type}
                name={name.toLowerCase()}
                placeholder={`Enter ${placeholder}...`}
                required
            />
        </div>
    )
}

export default FormInput;