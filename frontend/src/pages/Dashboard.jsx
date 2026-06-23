import React from "react";
import YoYChart from "../charts/YoYChart";
import HotspotChart from "../charts/HotspotChart";
import MonthlyTrendChart from "../charts/MonthlyTrendChart";
import KPICard from "../components/KPICard";
import IntensityCard from "../components/IntensityCard"; 

const Dashboard = () => {
  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      <h1>Carbon Emissions Reporting Platform</h1>

      <div>
        <h2>Emission Intensity KPI</h2>
        <IntensityCard />
      </div>

      <div>
  <h2>Year-over-Year Emissions</h2>
  <YoYChart />
</div>

      <div>
        <h2>Emission Hotspots</h2>
        <HotspotChart />
      </div>

      <div>
        <h2>Monthly Emission Trends</h2>
        <MonthlyTrendChart />
      </div>
    </div>
  );
};

export default Dashboard;