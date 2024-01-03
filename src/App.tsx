import React from 'react'
import Homepage from './components/Homepage'
import Navbar from './components/Navbar'
import { Provider } from 'react-redux';
import store from './store/store'
import LineChart from './components/LineChart';

export default function App() {
  return (
    <Provider store={store}>
        <div>
          <Navbar/>
          <Homepage/>
          <LineChart/>
        </div>
    </Provider>
  )
}