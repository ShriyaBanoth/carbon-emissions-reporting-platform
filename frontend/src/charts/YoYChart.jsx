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
  Legend,
} from "recharts";

const YoYChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchYoY();
  }, []);

  const fetchYoY = async () => {
    try {
      const response = await API.get("/analytics/yoy");

      const transformed = {};

      response.data.forEach((row) => {
        const year = row.year;

        if (!transformed[year]) {
          transformed[year] = {
            year,
            "Scope 1": 0,
            "Scope 2": 0,
          };
        }

        transformed[year][row.scope] =
          Number(row.total_emission);
      });

      setData(Object.values(transformed));
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

          <Legend />

          <Bar
            dataKey="Scope 1"
            stackId="a"
          />

          <Bar
            dataKey="Scope 2"
            stackId="a"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default YoYChart;