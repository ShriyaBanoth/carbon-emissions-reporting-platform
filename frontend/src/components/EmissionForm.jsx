import React, { useState } from "react";
import API from "../api";

const EmissionForm = () => {
  const [formData, setFormData] = useState({
    activity_name: "",
    scope: "Scope 1",
    quantity: "",
    activity_date: "",
    section: "",
    location: "",
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
      await API.post("/emissions", formData);

      alert("Emission Record Created");

      setFormData({
        activity_name: "",
        scope: "Scope 1",
        quantity: "",
        activity_date: "",
        section: "",
        location: "",
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
      <h2>Submit Emission Record</h2>

      <input
        name="activity_name"
        placeholder="Activity"
        value={formData.activity_name}
        onChange={handleChange}
      />

      <br /><br />

      <select
        name="scope"
        value={formData.scope}
        onChange={handleChange}
      >
        <option>Scope 1</option>
        <option>Scope 2</option>
      </select>

      <br /><br />

      <input
        name="quantity"
        type="number"
        placeholder="Quantity"
        value={formData.quantity}
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="activity_date"
        type="date"
        value={formData.activity_date}
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="section"
        placeholder="Section"
        value={formData.section}
        onChange={handleChange}
      />

      <br /><br />

      <input
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
      />

      <br /><br />

      <button type="submit">
        Submit
      </button>
    </form>
  );
};

export default EmissionForm;