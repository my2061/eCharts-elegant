import React, { useRef, useEffect } from "react";
import * as echarts from "echarts";
import { IProps } from "./type";
import { echartsResize } from "../../util";

const Index: React.FC<IProps> = (props) => {
  const chartRef: any = useRef(); //拿到DOM容器

  // 每当props改变的时候就会实时重新渲染
  useEffect(() => {
    const chart = echarts.init(chartRef.current); //echart初始化容器
    let option = {
      title: {
        text: props.title,
      },
      tooltip: {
        show: true,
      },
      xAxis: {
        type: "category",
        data: props.xData,
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: props.seriesData,
          type: "bar",
        },
      ],
    };

    chart.setOption(option);

    // 将图表变为自适应
    echartsResize(chart);
  }, [props]);

  return <div ref={chartRef} className="chart"></div>;
};

export default Index;
