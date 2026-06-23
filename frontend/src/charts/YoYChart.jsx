import React, { useEffect, useState } from "react";
import API from "../api";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const YoYChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchYoY();
  }, []);

  const fetchYoY = async () => {
    try {
      const response = await API.get("/analytics/yoy");
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ width: "100%", height: 350 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total_emission" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default YoYChart;