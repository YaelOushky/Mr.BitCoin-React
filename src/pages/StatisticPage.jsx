import React, { Component } from 'react';
import {
    getConfirmedTransactions,
    getMarketPrice,
} from '../Services/BitcoinService';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

export class StatisticPage extends Component {
    state = {
        dataMarket: null,
        descriptionMarket: null,
        dataConfirmed: null,
        descriptionConfirmed: null,
    };
    async componentDidMount() {
        this.loadConfirmed();
        this.loadMarket();
    }
    async loadConfirmed() {
        const newData = await getConfirmedTransactions();
        const dataConfirmed = newData.values.map((d) => {
            return d.y;
        });
        const descriptionConfirmed = newData.description;
        this.setState({ dataConfirmed, descriptionConfirmed });
    }
    async loadMarket() {
        const newData = await getMarketPrice();
        const dataMarket = newData.values.map((d) => {
            return d.y;
        });
        const descriptionMarket = newData.description;
        this.setState({ dataMarket, descriptionMarket });
    }

    render() {
        const {
            dataMarket,
            descriptionMarket,
            dataConfirmed,
            descriptionConfirmed,
        } = this.state;
        if (
            !dataMarket ||
            !descriptionMarket ||
            !dataConfirmed ||
            !descriptionConfirmed
        )
            return <div>Loading...</div>;
        return (
            <section className='statistic-page'>
                <div >
                    <h1>{descriptionMarket}</h1>
                    <Sparklines data={dataMarket}>
                        <SparklinesLine  color='pink'/>
                        <SparklinesSpots />
                    </Sparklines>
                </div>
                <div>
                    <h1>{descriptionConfirmed}</h1>
                    <Sparklines data={dataConfirmed}>
                        <SparklinesLine  color='grey'/>
                        <SparklinesSpots />
                    </Sparklines>
                </div>
            </section>
        );
    }
}
