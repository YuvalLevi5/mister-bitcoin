import { userService } from "../../services/userService"



export function signup(username) {
    return async (dispatch) => {
        try {
            const user = userService.signup(username)
            console.log(user)
            dispatch({type: 'USER-SIGNUP', user})
        } catch (err) {
            console.log(err)
        }
    }

}