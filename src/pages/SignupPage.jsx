import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from '../components/Form';
import {  getUser } from '../Services/UserService';
export class SignupPage extends Form {
    state = {
        data: { username: '', password: '' },
        errors: {},
    };
    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password'),
    };
    async componentDidMount() {
        // const userId = this.props.match.params.id;
        // if (!userId ) return this.setState({ user: this.mapToViewModal(this.state.user) })

        // const user = await getContactByIdServe(userId)
        // console.log(user);
        // // if (!user) return this.props.history.replace('/not-found');

        // this.setState({ user: this.mapToViewModal(user) });
    }
    mapToViewModal(user) {
        return {
            username: user.name,
            password: user.password,
        };
    }

    doSubmit = () => {
        getUser(this.state.data);
        this.props.history.push('/home');
    };

    render() {
        return (
            <div className='contact-edit'>
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('username', 'Username')}
                    {this.renderInput('password', 'Password', 'password')}
                    {this.renderButton('Sign Up')}
                </form>
            </div>
        );
    }
}
