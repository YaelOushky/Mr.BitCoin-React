import { getSuggestedQuery } from "@testing-library/react";
import { storageService } from './storageService'

const USER_KEY = 'user'
 let loggedInUser

export function loadUser() {
    let user = storageService.load(USER_KEY)
  user =  JSON.parse(user)
    return user
   
}

export function getUser(user) {
    console.log(user);
    const newUser = {
        _id: _makeId(),
        name: user.username,
        password: user.password,
        phone: '+1 (958) 502-3495',
        email: `${user.username}@renovize.com`,
        coins: 100,
        moves: [],
        isAdmin: false
    }
    storageService.store(USER_KEY, newUser)
}

export function addMove(contact, amount) {
    if (loggedInUser.coins - amount < 0) {
      alert('You cant do that')
      return
    }
    loggedInUser.coins -= amount
    let sentAt = new Date().toLocaleTimeString()
    loggedInUser.moves.unshift({ to: contact, amount, sentAt })
    storageService.store(USER_KEY, loggedInUser)
  }

function _makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}