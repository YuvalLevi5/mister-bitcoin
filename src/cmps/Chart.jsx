import React from "react"
import moment from "moment"
import { Line } from "react-chartjs-2"

import { Component } from "react"
export class StatChart extends Component {
  state = {}
  componentDidMount() {
    this.priceLabels()
  }
  componentWillUnmount() {}

  priceLabels = () => {
    let labels = []
    const data = []
    const { info } = this.props
    info.values.map((k) => {
      labels.unshift(moment(new Date() - k.x).format("M/D/YY hh:mm"))
      data.unshift(k.y)
    })
    return {
      labels,
      datasets: [
        {
          label: info.name,
          backgroundColor: "inherit",
          borderColor: "#ac3b61",
          data,
          pointRadius: 0,
          lineTension: 0.4,
          radius: 6,
        },
      ],
    }
  }

  render() {
    return (
      <div>
        <h1></h1>
        <Line data={this.priceLabels()} />
      </div>
    )
  }
}
