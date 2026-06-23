const express = require("express");
const router = express.Router();
const pool = require("../db/connection");

router.get("/hotspots", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        activity_name,
        SUM(calculated_emission) AS total_emission
      FROM emission_records
      GROUP BY activity_name
      ORDER BY total_emission DESC
    `);

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
});

router.get("/yoy", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        EXTRACT(YEAR FROM activity_date) AS year,
        scope,
        SUM(calculated_emission) AS total_emission
      FROM emission_records
      GROUP BY year, scope
      ORDER BY year
    `);

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
});

router.get("/monthly", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        TO_CHAR(activity_date, 'YYYY-MM') AS month,
        SUM(calculated_emission) AS total_emission
      FROM emission_records
      GROUP BY month
      ORDER BY month
    `);

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
});

router.get("/monthly", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT
        TO_CHAR(activity_date, 'YYYY-MM') AS month,
        SUM(calculated_emission) AS total_emission
      FROM emission_records
      GROUP BY month
      ORDER BY month
    `);

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
});

router.get("/intensity", async (req, res) => {
  try {
    const emissionsResult = await pool.query(`
      SELECT SUM(calculated_emission) AS total_emissions
      FROM emission_records
    `);

    const metricResult = await pool.query(`
      SELECT value
      FROM business_metrics
      ORDER BY metric_date DESC
      LIMIT 1
    `);

    const totalEmissions =
      Number(emissionsResult.rows[0].total_emissions || 0);

    const production =
      Number(metricResult.rows[0].value || 1);

    const intensity =
      totalEmissions / production;

    res.json({
      totalEmissions,
      production,
      intensity,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
}); 

module.exports = router;