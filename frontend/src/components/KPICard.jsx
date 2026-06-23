import React from "react";

const KPICard = ({ title, value }) => {
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        width: "250px",
      }}
    >
      <h3>{title}</h3>
      <h2>{value}</h2>
    </div>
  );
};

export default KPICard;