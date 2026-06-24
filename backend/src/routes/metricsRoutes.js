const express = require("express");
const router = express.Router();
const pool = require("../db/connection");

router.post("/", async (req, res) => {
  try {
    const {
      metric_name,
      value,
      metric_date,
    } = req.body;

    const result = await pool.query(
      `
      INSERT INTO business_metrics
      (
        metric_name,
        value,
        metric_date
      )
      VALUES ($1,$2,$3)
      RETURNING *
      `,
      [
        metric_name,
        value,
        metric_date,
      ]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;