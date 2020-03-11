import React from 'react';
import './bootstrap.min.css';
import Counters from './counterComponents/counters'

const dataCounters = [
    {
        startVal: 0,
        interval: 5,
        maxVal: 10,
        minVal: -1
    }, 
    
    {
        startVal: 20,
        interval:3,
        maxVal:70,
        minVal: 0
    },

    {
        startVal: 10,
        interval:10,
        maxVal:300,
        minVal: 0
    },

    {
        startVal: 50,
        interval:2,
        maxVal:100,
        minVal: 0
    },

    {
        startVal: 36,
        interval:6,
        maxVal:66,
        minVal: 26
    }

]

function App() {
  return (
    <Counters data={dataCounters}></Counters>
  );
}

export default App;
