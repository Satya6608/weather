// src/components/Chart.js
import React from 'react';
import CanvasJSReact from 'canvasjs.react';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = ({ chartData }) => {
  const options = {
    // Configure chart options based on chartData
  };

  return <CanvasJSChart options={options} />;
};

export default Chart;
