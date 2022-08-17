import { utilService } from "./utilService"

export const userService = {
    getUser,
    signup,
    makeMove,
    updateUser,
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

function makeMove(amount) {
    const move = {

    }
}

function updateUser(move) {
    try {
        const currUser = utilService.loadFromStorage('USER_DB')
        if (currUser.coins < move.amount) return new Error('not enoguht money')
        move = { ...move, from: currUser.name }
        currUser.moves.push(move)
        currUser.coins -= move.amount
        utilService.saveToStorage('USER_DB', currUser)
        return currUser
    } catch (err) {
        console.log(err)
    }

}