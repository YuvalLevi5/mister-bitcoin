import { Component } from "react"
import { StatChart } from "../cmps/Chart"

import Chart from "chart.js/auto"
import { CategoryScale } from "chart.js"
import { bitCoinService } from "../services/bitcoinService"
Chart.register(CategoryScale)

export default class StatisticPage extends Component {

  state = {
    priceMarketData: null,
    avgTransactionData: null,
  }

  componentDidMount() {
    this.loadPriceData()
    this.loadTransactionAvg()
  }
  componentWillUnmount() { }
  async loadPriceData() {
    const priceMarketData = await bitCoinService.getMarketPrice()
    this.setState({ priceMarketData }, () => {
    })
  }

  async loadTransactionAvg() {
    const avgTransactionData = await bitCoinService.getConfirmedTransactions()
    this.setState({ avgTransactionData }, () => {
    })
  }

  render() {
    const { priceMarketData, avgTransactionData } = this.state
    if (!priceMarketData || !avgTransactionData) return <div>Loading...</div>
    
    return (
      <section className='stat-page container margin'>
        <StatChart info={priceMarketData} />
        <StatChart info={avgTransactionData} />
      </section>
    )
  }
}