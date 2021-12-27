import React from 'react';
import Joi from 'joi-browser';
import  {Input} from './Input';
import { Select } from './Select';

class Form extends React.Component {
    state = {
        contact: {},
        errors: {},
    };
    validate = () => {
        const options = { abortEarly: false };
        const { error } = Joi.validate(this.state.contact, this.schema, options);
        if (!error) return null;
        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;
    };
    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;
        this.doSubmit();
    };
    handleChange = ({ currentTarget: input }) => {
        const errors = { ...this.state.errors };
        const errorMessage = this.validateProperty(input);
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const contact = { ...this.state.contact };
        contact[input.name] = input.value;
        this.setState({ contact, errors });
    };
    renderButton(label) {
        return (
            <button disabled={this.validate()} className="btn btn-primary">
                {label}
            </button>
        );
    }
renderSelect(name,label,options){
    const {contact, errors}= this.state

    return(<Select
    name={name}
    value={contact[name]}
    label={label}
    options={options}
    onChange={this.handleChange}
    error={errors[name]}
    />

    )
}

    renderInput(name ,label ,type = "text") {
        const { contact, errors } = this.state;

        return (
            <Input
                name={name}
                label={label}
                value={contact[name]}
                onChange={this.handleChange}
                type={type}
                error={errors[name]}
            />
        );
    }
}

export default Form;
