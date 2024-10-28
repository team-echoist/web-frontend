import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface LineGraphProps {
  data: any[];
  dataKey: string;
  xAxisKey: string;
  width?: string | number;
  height?: number;
}

function LineGraph({
  data,
  dataKey,
  xAxisKey,
  width = "100%",
  height = 400,
}: LineGraphProps) {
  return (
    <ResponsiveContainer style={{display:"flex","justifyContent":"center"}} width={width || "100%"} height={height || 400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xAxisKey} />
        <YAxis />
        <Tooltip />
        <Line
          dataKey={dataKey}
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default LineGraph;
