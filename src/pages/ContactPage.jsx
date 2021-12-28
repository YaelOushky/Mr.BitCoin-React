import React, { Component } from 'react';
import { deleteContact } from '../Services/ContactService';
import { ContactPreview } from '../components/ContactPreview';
import { ContactFilter } from '../components/ContactFilter';
import { Link } from 'react-router-dom';
import { DeleteModal } from '../components/DeleteModal';
import {
    loadContacts,
    removeContact,
    setFilterBy,
} from '../store/actions/contactActions';
import { connect } from 'react-redux';

export class _ContactPage extends Component {
    state = {
        // contacts: [],
        isOpen: false,
        currId: null,
    };

    async componentDidMount() {
        // this.loadContacts();
        this.props.loadContacts();
    }

    // async loadContacts() {
    //     const { filterBy } = this.state;
    //     const contacts = await getContacts(filterBy);
    //     this.setState({ contacts });
    // }
    onChangeFilter = (filterBy) => {
        // console.log(filterBy);
        // this.setState({ filterBy }, this.loadContacts)
        this.props.setFilterBy(filterBy);
        this.props.loadContacts();
    };
    removeContact = (contactId) => {
        // this.setState(prevState => ({ isOpen: !prevState.isOpen, currId: contactId }))
        this.props.removeContact(contactId);
    };

    onCloseModal() {
        this.setState((prevState) => ({ isOpen: false }));
    }
    onHandleDelete = async (val) => {
        if (val) {
            const id = this.state.currId;
            await deleteContact(id);
            this.props.loadContacts();
        }
        this.onCloseModal();
    };
    render() {
        const { isOpen } = this.state;
        const { contact } = this.props;
        if (!contact) return <div>Loading...</div>;
        return (
            <div>
                <ContactFilter onChangeFilter={this.onChangeFilter} />
                <div className="container-preview">
                    {contact.map((contact) => (
                        <ContactPreview
                            key={contact._id}
                            contact={contact}
                            removeContact={this.removeContact}
                        />
                    ))}
                    <Link to="/contact/edit">
                        <div className="btn-add">
                            <span>+</span>
                        </div>
                    </Link>
                </div>
                {isOpen && <DeleteModal onHandleDelete={this.onHandleDelete} />}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        contact: state.contactModule.contacts,
    };
};

const mapDispatchToProps = {
    loadContacts,
    removeContact,
    setFilterBy,
    // spendBalance
};

export const ContactPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(_ContactPage);
