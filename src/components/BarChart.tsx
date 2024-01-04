import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ReactEcharts from "echarts-for-react";

export default function BarChart() {

    const data = useSelector((state:any)=>state.data) 
    const [sortData,setSortData] = useState([])

    const lastdata = data.data[data.data.length - 1]
    const [changemonth,setChangeMonth] = useState('')
 
    const handleSelect =(x:any)=>{
      setChangeMonth(x)
      const filteredData  = data.data.filter((item:any) => {
        return item.month === x;
      });
      setSortData(filteredData)
    }
    const x = sortData.map((item:any)=>item.publishdate)
    const totalCases = sortData.map((item:any)=>item.totalCases)
    const totalRecovered =sortData.map((item:any)=>item.totalRecovered)
    const totalDeaths = sortData.map((item:any)=>item.totalDeaths)

    useEffect(()=>{
    if(data.data.length >0){
      setChangeMonth(lastdata?.month)
      const filteredData  = data.data.filter((item:any) => {
        return item.month === changemonth;
      });
      setSortData(filteredData)
    }
    },[data])

    var option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: x
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'ผู้ป่วยยืนยัน (สะสม)',
          type: 'bar',
          emphasis: {
            focus: 'series'
          },
          data: totalCases
        },
                {
          name: 'ผู้หายป่วย (สะสม)',
          type: 'bar',
          emphasis: {
            focus: 'series'
          },
          data: totalRecovered
        },
                {
          name: 'ผู้เสียชีวิต (สะสม)',
          type: 'bar',
          emphasis: {
            focus: 'series'
          },
          data: totalDeaths
        },
      ]
    };
  return (
    <div className='p-5 container mx-auto bg-slate-50 my-10 rounded-md shadow-md'>
      <select className='p-2 shadow-md rounded-md' onChange={(e)=>handleSelect(e.target.value)} defaultValue={changemonth} value={changemonth}>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        <ReactEcharts option={option} />
    </div>
  )
}