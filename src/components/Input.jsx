import React from 'react';

export const Input = ({ name, label,  error ,...rest}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}></label>
            <input
              {...rest}
                name={name}
                id={name}
                className="form-control"
                placeholder={label}
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
};
