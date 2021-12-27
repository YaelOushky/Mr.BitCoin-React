import React, { Component } from 'react'
import { getUser } from '../Services/UserService';
import { getBitcoin } from '../Services/BitcoinService';

export class HomePage extends Component {
    state={
        user :null,
        coin:0,
        filterBy: null
    }
     componentDidMount() {
        this.loadUser()
        this.loadBitcoin()
    }
    async loadBitcoin(){
        const coin = await getBitcoin()
        this.setState({coin})
    }
     loadUser() {
        const { filterBy } = this.state
        const user = getUser(filterBy)
        this.setState({ user })
    }
    render() {
        const {user, coin}= this.state
        if (!user || !coin) return <div>Loading...</div>
        return (
            <div className='home-page'>
                <img src={`./../../imgs/user.jpg`}  alt="" />
                <div className='user-details'>
                <h1> {user.name} </h1>
                <h3>{user.phone}</h3>
                <h4>{user.email}</h4>
                </div>
                <h2><img src={`./../../imgs/coins.png`}  /> Coins: {user.coins}</h2>
                <h2><img src={`./../../imgs/bitcoin.png`}  /> BTC: {coin}</h2>
               {/* <input /> */}
            </div>
        )
    }
}
