import { utilService } from "../../services/utilService"

const INITIAL_STATE = {
    loggedInUser: utilService.loadFromStorage('USER_DB') || null,
}

export function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'USER-SIGNUP':
            return {
                ...state,
                loggedInUser: action.user
            }
        case 'SPEND_BALANCE':
            const { loggedInUser } = state

            return {
                ...state,
                loggedInUser: { ...loggedInUser, balance: loggedInUser.balance - action.amount }
            }

        default:
           return state
    }
}