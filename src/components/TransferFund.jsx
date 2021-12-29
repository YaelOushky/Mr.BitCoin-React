import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from '../components/Form';

export class TransferFund extends Form {
    state = {
        data: {
           
            amount: '',
        },
        errors: {},
    };
    schema = {
        amount: Joi.string().required().label('Amount'),
    };
  
    mapToViewModal(transfer) {
        return {
            amount: transfer.amount,
        };
    }

    doSubmit = () => {
        this.props.addMove(this.state.data.amount)       
    };

    render() {
        return (
            <div className='contact-edit-transfer'>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('amount', 'Transfer', 'number')}
                    {this.renderButton('Send')}
                </form>
            </div>
        );
    }
}


