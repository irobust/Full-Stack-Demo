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
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const fakeData = [10, 40, 50, 35, 67, 47, 11, 71, 40, 70, 14, 33]
  const fakeData2 = [ 71, 40, 70, 14, 35, 67, 47, 11, 33, 10, 40, 50]
  
export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map((label, index) => fakeData[index]),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map((label, index) => fakeData2[index]),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
};

const Chart = () => {
    return (
        <>
            <Line options={options} data={data} />;
        </>
    )
}

export default Chart