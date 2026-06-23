import React from "react";
import YoYChart from "../charts/YoYChart";
import HotspotChart from "../charts/HotspotChart";
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
      </div>
    </div>
  );
};

export default Dashboard;