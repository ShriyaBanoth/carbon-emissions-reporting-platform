import React, { useEffect, useState } from "react";
import API from "../api";
import KPICard from "./KPICard";

const IntensityCard = () => {
  const [intensity, setIntensity] = useState(null);

  useEffect(() => {
    fetchIntensity();
  }, []);

  const fetchIntensity = async () => {
    try {
      const response = await API.get("/analytics/intensity");

      setIntensity(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!intensity) {
    return (
      <KPICard
        title="Emission Intensity"
        value="Loading..."
      />
    );
  }

  return (
    <KPICard
      title="Emission Intensity"
      value={`${intensity.intensity.toFixed(4)} kgCO₂e / Ton`}
    />
  );
};

export default IntensityCard;