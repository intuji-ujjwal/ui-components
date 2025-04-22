import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
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
  Filler,
  Legend,
);

export interface LineArrayChart {
  dataOne: number;
  dataTwo: number;
  dataThree: number;
  dataFour: number;
  dataFive: number;
  borderColor: string;
  shadowColor: string;
  zIndex: number;
}

export interface LineChartProps {
  items: LineArrayChart[];
  color: string;
  showScales: boolean;
  showShadow: boolean;
  bars: number;
}

const LineChart: React.FC<LineChartProps> = ({
  items,
  showScales,
  showShadow,
  bars,
}) => {
  const labels = ['DataOne', 'DataTwo', 'DataThree', 'DataFour', 'DataFive'];
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true, // Enable tooltips
      },
    },
    scales: {
      x: {
        display: showScales, // Hide x-axis
      },
      y: {
        display: showScales, // Hide y-axis
      },
    },
    elements: {
      point: {
        radius: 0, // Remove the circles (data points)
      },
      line: {
        tension: 0.3, // Optional: Smooth the line
        borderWidth: 2, // Line width
      },
    },
  };

  // Generate datasets based on sliced items
  const datasets = Array(bars)
    .fill(null)
    .map((_, index) => ({
      fill: showShadow,
      label: `Dataset ${index + 1}`,
      data: [
        items[index]?.dataOne || 0,
        items[index]?.dataTwo || 0,
        items[index]?.dataThree || 0,
        items[index]?.dataFour || 0,
        items[index]?.dataFive || 0,
      ],
      borderColor: items[index]?.borderColor || 'gray',

      backgroundColor: items[index]?.shadowColor || 'gray',
      zIndex: items[index]?.zIndex,
      shadowBlur: 10, // Shadow blur radius
    }));

  const data = {
    labels,
    datasets,
  };

  return (
    <div style={{ width: '500px' }}>
      <Line
        options={options}
        data={data}
      />
    </div>
  );
};

export default LineChart;
