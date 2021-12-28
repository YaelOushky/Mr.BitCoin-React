import { getSuggestedQuery } from "@testing-library/react";

 var gUsers=[]

// export function getUser() {
//     return {
//         _id: _makeId(),
//         name: 'Glenna Santana ',
//         phone: '+1 (958) 502-3495',
//         email: 'glennasantana@renovize.com',
//         password: '1234',
//         isAdmin: false,
//         coins: 100,
//         moves: [],
//     };
// }
export function loadUser() {
    console.log(gUsers[gUsers.length-1]);
    return gUsers[gUsers.length-1]
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
    gUsers.push(newUser)
    console.log(gUsers);
}

function _makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}