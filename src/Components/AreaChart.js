import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Earnings',
            data: [0, 10000, 15000, 10000, 20000, 15000, 25000, 20000, 30000, 25000, 35000, 40000],
            borderColor: '#4e73df',
            backgroundColor: '#4e73df',
        },
    ],
};

export default function AreaChart(){
    return < Line Options={options} data = {data}/>
}
