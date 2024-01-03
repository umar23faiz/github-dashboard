// components/BarChart.js
import React from 'react';
import { HorizontalBarSeries, XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines } from 'react-vis';

const BarChart = ({ data }) => {
  return (
    <XYPlot width={600} height={300} xType="ordinal">
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis title="Repository" />
      <YAxis title="Stars" />
      <HorizontalBarSeries data={data} />
    </XYPlot>
  );
};

export default BarChart;
