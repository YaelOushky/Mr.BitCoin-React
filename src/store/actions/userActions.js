export function spendBalance(amount) {
    console.log('spendBalance -> amount', amount)
    return async (dispatch) => {
        dispatch({type: 'SPEND_BALANCE', amount})
    }
}