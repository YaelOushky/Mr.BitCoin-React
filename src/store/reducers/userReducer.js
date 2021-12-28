const INITIAL_STATE = {
    loggedInUser: {
        name: 'Muki',
        balance: 100,
        isAdmin: true
    }
}

export function userReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'SPEND_BALANCE':
            const { loggedInUser } = state
            return {
                ...state,
                loggedInUser: { ...loggedInUser, balance: loggedInUser.balance - action.amount }
            }

        default:
            return state;
    }
}