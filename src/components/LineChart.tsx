import React from 'react'
import { useSelector } from 'react-redux'
// import ReactEcharts from "echarts-for-react";

export default function LineChart() {

    const data = useSelector((state:any)=>state.data)

    // const mychart = echarts.init(document.getElementById('linechart'));
    var option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
            }
        ]
        };

    //   mychart.setOption(option);

  return (
    <></>
    // <ReactEcharts option={option} />
  )
}