import React, { useEffect } from 'react'
import axios from 'axios'
import Card from './Card'
import { useDispatch, useSelector } from "react-redux"
import { addData } from '../store/dataSlice'

function Homepage() {

  const dispatch = useDispatch();
  const data = useSelector((state:any)=>state.data)  
    useEffect (()=>{
      axios.get('https://cors-anywhere.herokuapp.com/https://covid19.traffy.in.th/api/state-covid19')
        .then((response:any)=>{
          dispatch(addData(response.data.results))
        })
        .catch((error)=>{
          console.log(error);
        })
    },[])
  const lastdata = data.data[data.data.length - 1]
  return (
      <div className='container mx-auto mt-10 shadow-md rounded-md p-4 bg-slate-50'>
        <h1 className='text-center text-3xl p-4'>Dashboard Covid 2019</h1>
        <h1 className='text-center text-2xl p-4'>รายงานข้อมูล Covid ของวันที่ {data.loading ? null : lastdata.publishdate}</h1>
        {data.loading ? (<p className='text-center'>Loading...</p>) : 
        (
        <div className='flex justify-center gap-5'>
          <Card title={'จำนวนผู้ป่วยยืนยัน (สะสม)'} number={lastdata.totalCases}/>
          <Card title={'จำนวนผู้หายป่วย (สะสม)'} number={lastdata.totalRecovered}/>
          <Card title={'จำนวนผู้เสียชีวิต (สะสม)'} number={lastdata.totalDeaths}/>
          <Card title={'กำลังรักษา (ปัจจุบัน)'} number={lastdata.currentlyInfectedPatients}/>
          <Card title={'จำนวนผู้ป่วยที่มีอาการรุนแรง (ปัจจุบัน)'} number={lastdata.currentlySeriousOrCritical}/>
        </div>
        ) }
      </div>
  )
}

export default Homepage