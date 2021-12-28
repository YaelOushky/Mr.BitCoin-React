import {
    getContacts,
    getContactByIdServe,
    deleteContact,
} from '../../Services/ContactService';

export function loadContacts() {
    return async (dispatch, getState) => {
        const { filterBy } = getState().contactModule;
        try {
            const contacts = await getContacts(filterBy);
            dispatch({ type: 'SET_CONTACTS', contacts });
        } catch (err) {
            console.log(err);
        }
    };
}

export function removeContact(contactId) {
    return async (dispatch) => {
        try {
            await deleteContact(contactId);
            dispatch({ type: 'REMOVE_CONTACT', contactId });
        } catch (err) {
            console.log(err);
        }
    };
}

export function setFilterBy(filterBy) {
    return async (dispatch) => {
        dispatch({ type: 'SET_FILTER_BY', filterBy });
    };
}

export function getContactById(contactId) {
    return async () => {
        return await getContactByIdServe(contactId);
    };
}
