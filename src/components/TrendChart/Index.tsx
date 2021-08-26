import React, { useEffect, useRef } from "react";
import { IProps } from "./type";
import * as echarts from "echarts";
import { echartsResize } from "../../util";

const Index: React.FC<IProps> = (props) => {
  const chartRef: any = useRef(); //拿到DOM容器

  // 每当props改变的时候就会实时重新渲染
  useEffect(() => {
    const chart = echarts.init(chartRef.current); //echart初始化容器
    const option = {
      title: {
        text: props.seriesData?.length > 0 ? props.title : "暂无数据",
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: props.xData,
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: props.seriesData,
          type: "line",
          areaStyle: {},
        },
      ],
      color: {
        type: "linear",
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: "#0099cd", // 0% 处的颜色
          },
          {
            offset: 1,
            color: "#26b384", // 100% 处的颜色
          },
        ],
      },
      tooltip: {
        show: true,
        textStyle: {
          fontSize: 18,
        },
      },
    };

    // @ts-ignore
    chart.setOption(option);
    
    // 将图表变为自适应
    echartsResize(chart);
  }, [props]);

  return <div ref={chartRef} className="chart"></div>;
};

export default Index;
