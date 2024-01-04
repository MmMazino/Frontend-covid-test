import React from 'react'
import { useSelector } from 'react-redux'
import ReactEcharts from "echarts-for-react";

export default function LineChart() {

    const data = useSelector((state:any)=>state.data)
    const x = data.data.map((item:any)=>item.publishdate)
    const totalCases = data.data.map((item:any)=>item.totalCases)
    const totalRecovered = data.data.map((item:any)=>item.totalRecovered)
    const totalDeaths = data.data.map((item:any)=>item.totalDeaths)
    var option = {
    title: {
        text: 'LineChart'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['Cases', 'Recovered', 'Deaths']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '2%',
        containLabel: true
    },
    toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
        xAxis: {
            type: 'category',
            data: x.slice(-data.data.length-1)
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
            name:"Cases",
            data: totalCases,
            type: 'line'
            },            {
            name:"Recovered",
            data: totalRecovered,
            type: 'line'
            },            {
            name:"Deaths",
            data: totalDeaths,
            type: 'line'
            }
        ]
        };


  return (
    <div className='p-5 container mx-auto bg-slate-50 my-10 rounded-md shadow-md'>
        <ReactEcharts option={option} />
    </div>
  )
}