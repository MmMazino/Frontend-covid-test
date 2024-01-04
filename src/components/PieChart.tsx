import React from 'react'
import { useSelector } from 'react-redux'
import ReactEcharts from "echarts-for-react";

const PieChart = () => {
    
    const data = useSelector((state:any)=>state.data)
    const lastdata = data.data[data.data.length - 1]

    console.log(lastdata);
    
    const totalHospitalPUI  = lastdata?.totalHospitalPUI;
    const totalPrivateHospital  =lastdata?.totalPrivateHospital;
    const totalPublicHospital  = lastdata?.totalPublicHospital;
    const totalOtherPUI   = lastdata?.totalOtherPUI;

  var  option = {
  title: {
    text: 'จำนวนผู้ป่วยเข้าเกณฑ์ PUI',
    subtext: ['วันที่ประกาศ '+lastdata?.publishdate],
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'จำนวนผู้ป่วยเข้าเกณฑ์ PUI',
      type: 'pie',
      radius: '50%',
      data: [
        { value: totalHospitalPUI, name: 'อาการตามนิยามเข้าโรงพยาบาล (สะสม)' },
        { value: totalPrivateHospital, name: 'อาการตามนิยามเข้าโรงพยาบาลเอกชน (สะสม)' },
        { value: totalPublicHospital, name: 'อาการตามนิยามเข้าโรงพยาบาลรัฐ(สะสม)' },
        { value: totalOtherPUI, name: 'อาการตามนิยามรับอื่นๆ (สะสม)' },
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
  return (
    <div className='p-5 container mx-auto bg-slate-50 my-10 rounded-md shadow-md'>
        <ReactEcharts option={option} />
    </div>
  )
}

export default PieChart