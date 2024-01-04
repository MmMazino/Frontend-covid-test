import React from 'react'
import Homepage from './components/Homepage'
import { Provider } from 'react-redux';
import store from './store/store'
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';

export default function App() {
  return (
    <Provider store={store}>
        <div>
          <Homepage/>
          <LineChart/>
          <BarChart/>
          <PieChart/>
        </div>
    </Provider>
  )
}