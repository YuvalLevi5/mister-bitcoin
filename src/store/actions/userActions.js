import { userService } from "../../services/userService"



export function signup(username) {
    return async (dispatch) => {
        try {
            const user = userService.signup(username)
            dispatch({ type: 'USER-SIGNUP', user })
        } catch (err) {
            console.log(err)
        }
    }
}

export function makeMove(amount, to) {
    return async (dispatch) => {
        try {
            const move = {
                from: '',
                to: to._id,
                toName: to.name,
                at: new Date(),
                amount,
            }
            const user = userService.updateUser(move)
            dispatch({ type: 'USER-SIGNUP', user })

        } catch (err) {
            console.log(err)
        }
    }
}