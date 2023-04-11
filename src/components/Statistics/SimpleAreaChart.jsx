import React from "react";
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from "recharts";

import data from "./data";

const SimpleAreaChart = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <h2 className="font-bold text-3xl text-center my-8">Assignment Chart</h2>
      <div>
        <AreaChart
          className="mx-auto"
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="mark"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default SimpleAreaChart;
