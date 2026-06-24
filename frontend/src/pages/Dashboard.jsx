import React from "react";
import IntensityCard from "../components/IntensityCard";
import YoYChart from "../charts/YoYChart";
import HotspotChart from "../charts/HotspotChart";
import MonthlyTrendChart from "../charts/MonthlyTrendChart";
import EmissionForm from "../components/EmissionForm";
import BusinessMetricForm from "../components/BusinessMetricForm";

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
      <EmissionForm />
      <BusinessMetricForm />

      <div style={{ marginBottom: "30px" }}>
        <IntensityCard />
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h2>Year-over-Year Emissions</h2>
        <YoYChart />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
        }}
      >
        <div>
          <h2>Emission Hotspots</h2>
          <HotspotChart />
        </div>

        <div>
          <h2>Monthly Emission Trends</h2>
          <MonthlyTrendChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;