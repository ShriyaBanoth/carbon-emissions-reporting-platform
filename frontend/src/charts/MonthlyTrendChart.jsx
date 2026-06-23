import React, { useEffect, useState } from "react";
import API from "../api";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const MonthlyTrendChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchMonthly();
  }, []);

  const fetchMonthly = async () => {
    try {
      const response = await API.get("/analytics/monthly");
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ width: "100%", height: 350 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="total_emission"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyTrendChart;