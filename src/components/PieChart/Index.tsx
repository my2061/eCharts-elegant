import React, { useEffect, useRef } from 'react';
import { IProps } from "./type";
import * as echarts from "echarts";
import { echartsResize } from "../../util";

const Index: React.FC<IProps> = (props) => {

    const chartRef:any = useRef();  //拿到DOM容器

    // 每当props改变的时候就会实时重新渲染
    useEffect(()=>{
        const chart = echarts.init(chartRef.current);   //echart初始化容器
        let option = {
            title: {
                text: '某站点用户访问来源',
                subtext: '纯属虚构',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '50%',
                    data: [
                        {value: 1000, name: '搜索引擎'},
                        {value: 735, name: '直接访问'},
                        {value: 580, name: '邮件营销'},
                        {value: 484, name: '联盟广告'},
                        {value: 300, name: '视频广告'}
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

        chart.setOption(option);

        // 将图表变为自适应
        echartsResize(chart);
    }, [props]);

    return <div ref={chartRef} className="chart"></div>
}

export default Index;