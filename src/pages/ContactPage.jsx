import React, { Component } from 'react';
import { getContacts ,deleteContact} from '../Services/ContactService';
import { ContactPreview } from '../components/ContactPreview';
import { ContactFilter } from '../components/ContactFilter';
import { Link } from 'react-router-dom'
import { DeleteModal } from '../components/DeleteModal';

export class ContactPage extends Component {
    state = {
        contacts: [],
        isOpen:false,
        currId: null
    };

    async componentDidMount() {
        this.loadContacts();
    }

    async loadContacts() {
        const { filterBy } = this.state;
        const contacts = await getContacts(filterBy);
        this.setState({ contacts });
    }
    onChangeFilter = (filterBy) => {
        console.log(filterBy);
        this.setState({ filterBy }, this.loadContacts)

    }
    removeContact = (contactId) => {
        this.setState(prevState => ({ isOpen: !prevState.isOpen, currId: contactId }))
    }

    onCloseModal() {
        this.setState(prevState => ({ isOpen: false }))
    }
    onHandleDelete = async (val) => {
        if (val) {
            const id = this.state.currId
            await deleteContact(id)
            this.loadContacts()
        }
        this.onCloseModal()
    }
    render() {
        const { contacts , isOpen} = this.state;
        if (!contacts) return <div>Loading...</div>;
        return (
            <div >
                <ContactFilter onChangeFilter={this.onChangeFilter}/>
                <div className='container-preview'>
                {contacts.map((contact) => (
                    <ContactPreview key={contact._id} contact={contact} removeContact={this.removeContact}/>
                ))}
                <Link to="/contact/edit">
                <div className='btn-add'><span>+</span></div>
                    </Link> 
                </div>
                {isOpen && <DeleteModal onHandleDelete={this.onHandleDelete} />}
            </div>
        );
    }
}
