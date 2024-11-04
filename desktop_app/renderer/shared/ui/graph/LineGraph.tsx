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
import color from "@/shared/styles/color";

interface LineGraphProps {
  data: { weekStart: string; weekEnd: string; count: number }[];
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
  const latestWeekStart = data[data.length - 1]?.weekStart;
  return (
    <ResponsiveContainer
      style={{
        display: "flex",
        justifyContent: "center",
      }}
      width={width || "80%"}
      height={height || 400}
    >
      <LineChart data={data}>
        <CartesianGrid display="none" />
        <XAxis
          interval="preserveStartEnd"
          dataKey={xAxisKey}
          tickFormatter={(date) => {
            if (date === latestWeekStart) {
              return "이번주";
            }
            const weekStartDate = new Date(date);
            const isFirstWeekOfMonth = weekStartDate.getDate() <= 7;
            return isFirstWeekOfMonth
              ? `${weekStartDate.getMonth() + 1}월`
              : "";
          }}
          style={{ stroke: "none" }}
        />
        <YAxis hide={true} style={{ stroke: "none" }} />
        <Tooltip
          contentStyle={{ backgroundColor: color.lightBlack,border:"none" }}
          labelFormatter={(date) =>
            `Week of ${new Date(date).toLocaleDateString()}`
          }
          cursor={false}
        />
        <Line
          dataKey={dataKey}
          stroke={color.pointcolor}
          activeDot={{ r: 4, fill: color.pointcolor, stroke: color.pointcolor }}
          dot={{ fill: color.pointcolor }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default LineGraph;
