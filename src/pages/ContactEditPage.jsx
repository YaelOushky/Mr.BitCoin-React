import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from '../components/Form';
import {  saveContact, getContactByIdServe } from '../Services/ContactService';
export class ContactEditPage extends Form {
    state = {
        data: {
            name: '',
            email: '',
            phone: '',
        },
        errors: {},
    };
    schema = {
        _id: Joi.string(),
        name: Joi.string().required().label('Name'),
        email: Joi.string().required().label('Email'),
        phone: Joi.string().required().label('Phone'),
    };
    async componentDidMount() {
        const contactId = this.props.match.params.id;
        if (!contactId ) return this.setState({ data: this.mapToViewModal(this.state.data) })

        const contact = await getContactByIdServe(contactId)
        console.log(contact);

        this.setState({ data: this.mapToViewModal(contact) });
    }
    mapToViewModal(contact) {
        return {
            _id: contact._id,
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
        };
    }

    doSubmit = () => {
        //Call the server
        console.log(this.state.data);
        saveContact(this.state.data);
        this.props.history.push('/contact');
    };

    render() {
        return (
            <div className='contact-edit'>
                <img src={`../../public/imgs/user.jpg`}  alt="" />
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('name', 'Name')}
                    {this.renderInput(
                        'email',
                        'Email',
                        'email'
                    )}
                    {this.renderInput('phone', 'Phone')}
                    {this.renderButton('Save')}
                </form>
            </div>
        );
    }
}
