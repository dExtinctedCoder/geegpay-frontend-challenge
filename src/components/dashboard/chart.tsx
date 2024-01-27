import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
      text: 'sales trend',
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Aug', 'Nov', 'Dec'];

const data = {
  labels,
  datasets: [
    {
      label: 'sales trend',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 50000 })),
      backgroundColor: 'rgb(52,202,165)',
    },
  ],
};

export function Chart() {
  return <Bar options={options} data={data} />;
}
