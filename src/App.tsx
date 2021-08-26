import React, { PureComponent } from "react";
import LineChart from "./components/LineChart/Index";
import PieChart from "./components/PieChart/Index";
import BarChart from "./components/BarChart/Index";
import TrendChart from "./components/TrendChart/Index";

import "./App.css";
export default class App extends PureComponent {
  eChartsRef: any = React.createRef();

  state = {
    lineChartData: {
      //折线图模拟数据
      xData: [
        "2021/08/13",
        "2021/08/14",
        "2021/08/15",
        "2021/08/16",
        "2021/08/17",
        "2021/08/18",
      ],
      seriesData: [22, 19, 88, 66, 5, 90],
    },
  };

  
  componentDidMount() {
    setInterval(() => {
      this.setState({
        lineChartData: {
          xData: [...this.state.lineChartData.xData, "2000/01/01"],
          seriesData: [...this.state.lineChartData.seriesData, Math.floor(Math.random() * 100)],
        }
      })
    }, 1500 );
  }

  render() {
    return (
      <div className="homeWrapper">
        {/* 折线图 */}
        {/* <div className="chartWrapper">
          <LineChart
            title="折线图模拟数据"
            xData={this.state.lineChartData.xData}
            seriesData={this.state.lineChartData.seriesData}
          />
        </div> */}

        {/* 柱状图 */}
        {/* <div className="chartWrapper">
          <BarChart
            title="柱状图模拟数据"
            xData={this.state.lineChartData.xData}
            seriesData={this.state.lineChartData.seriesData}
          />
        </div> */}


        {/* 趋势图 */}
        <div className="chartWrapper">
          <TrendChart
            title="趋势图模拟数据"
            xData={this.state.lineChartData.xData}
            seriesData={this.state.lineChartData.seriesData}
          />
        </div>


        {/* 饼状图 */}
        <div className="chartWrapper">
          <PieChart />
        </div>
      </div>
    );
  }
}
