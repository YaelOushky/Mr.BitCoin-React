import { Component } from 'react'
// import { getMarketPrice } from '../services/BitcoinService'
import { getMarketPrice , getConfirmedTransactions} from '../Services/BitcoinService'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export class StatisticPage extends Component {
  state = {
    marketPrice: [],
    confirmedTransactions: [],
    // AverageBlockSize: [],
  }

  componentDidMount() {
    this.loadMarketPrice()
    this.loadConfirmedTransactions()
  }
  async loadMarketPrice() {
    const data = await getMarketPrice()
    const marketPrice = data.values
    this.setState({ marketPrice })
  }
  async loadConfirmedTransactions() {
    const data = await getConfirmedTransactions()
    const confirmedTransactions = data.values
    this.setState({ confirmedTransactions })
  }

  options1 = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Market Price',
      },
    },
  }

  options2 = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Trade Volume',
      },
    },
  }

  get data1() {
    const labels = this.state.marketPrice.map((item) =>
      new Date(item.x * 1000).toLocaleDateString()
    )

    const data = {
      labels: labels,
      datasets: [
        {
          label: 'BTC Rate ',
          data: this.state.marketPrice.map((item) => item.y),
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    }
    return data
  }
  get data2() {
    const labels = this.state.confirmedTransactions.map((item) =>
      new Date(item.x * 1000).toLocaleDateString()
    )

    const data = {
      labels: labels,
      datasets: [
        {
          label: 'BTC Rate ',
          data: this.state.confirmedTransactions.map((item) => item.y),
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    }
    return data
  }

  // labels = this.state.marketPrice.map(item => new Date(item.x).toLocaleDateString())
  render() {
    return (
      <div className="statistic-page">
        <div className="chart-box">
          <Line className="chart" options={this.options1} data={this.data1} />
        </div>
        <div className="chart-box">
          <Line className="chart" options={this.options2} data={this.data2} />
        </div>
      </div>
    )
  }
}
