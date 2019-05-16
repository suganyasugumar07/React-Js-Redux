import React from 'react';
import Chart from 'react-google-charts';


const columns = [
    { type: 'string', label: 'Subject' },
    { type: 'number', label: '2017-18' },
    { type: 'number', label: '2018-19' },
]

const rows = [
    ['Java',2000,3000],
    ['DotNet',3000,4000],
    ['React',4000,5000]
]

const data = [columns, ...rows];
const Content = () => {

    return (
        <div >
            <h2>ES6 , Typescript, JSX etc</h2>
            <Chart chartType="AreaChart" data={data}></Chart>
        </div>
    );

}

export default Content;