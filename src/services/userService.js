import { utilService } from "./utilService"

export const userService = {
    getUser,
    signup,
}

function getUser() {
    return {
        name: 'Yuval Levi',
        coins: 100,
        moves: []
    }
}

function signup(username) {
    const user = {
        name: username,
        coins: 100,
        moves: []
    }

    utilService.saveToStorage('USER_DB', user)
    return user
}