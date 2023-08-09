import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Direct', 'Social', 'Referral'],
    datasets: [
        {
            label: '',
            data: [55, 30, 15],
            backgroundColor: [
                '#4e73df',
                '#1cc88a',
                '#36b9cc',

            ],
            borderColor: [
                '#4e73df',
                '#1cc88a',
                '#36b9cc',

            ],
            borderWidth: 1,
        },
    ],
};

export default function DoughnutChart(){
    return <Doughnut data={data} />;
}