import React, { useState } from "react";
import API from "../api";

const BusinessMetricForm = () => {
  const [formData, setFormData] = useState({
    metric_name: "",
    value: "",
    metric_date: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/metrics", formData);

      alert("Business Metric Saved");

      setFormData({
        metric_name: "",
        value: "",
        metric_date: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        marginBottom: "30px",
      }}
    >
      <h2>Business Metric</h2>

      <input
        name="metric_name"
        placeholder="Metric Name"
        value={formData.metric_name}
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="value"
        type="number"
        placeholder="Value"
        value={formData.value}
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="metric_date"
        type="date"
        value={formData.metric_date}
        onChange={handleChange}
      />

      <br /><br />

      <button type="submit">
        Save Metric
      </button>
    </form>
  );
};

export default BusinessMetricForm;