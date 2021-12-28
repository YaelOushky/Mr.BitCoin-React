import React from 'react';
import {  getContactByIdServe } from '../Services/ContactService';
import { Link } from 'react-router-dom';

export class ContactDetailsPage extends React.Component {
    state = {
        contact: null,
    };
    async componentDidMount() {
        const contact = await getContactByIdServe(this.props.match.params.id);
        this.setState({ contact });
    }

    render() {
        const { contact } = this.state;
        return (
            <div className='contact-details'>
                <div className='button-icon'>

                <Link to="/contact"><button>Back</button></Link>
                <Link to={`/contact/edit/${contact?._id}`}><button>Edit</button></Link>
                
                </div>
                <div className='user-details'>
                <img src={`./../../imgs/user.jpg`} alt="" />
                <h1> {contact?.name}</h1>
                <h3>{contact?.phone}</h3>
                <h4>{contact?.email}</h4>
                </div>
            </div>
        );
    }
}
