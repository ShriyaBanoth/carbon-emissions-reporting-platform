const express = require("express");
const router = express.Router();
const pool = require("../db/connection");

router.post("/", async (req, res) => {
  try {
    const {
      activity_name,
      scope,
      quantity,
      activity_date,
      section,
      location,
    } = req.body;

    const factorResult = await pool.query(
      `
      SELECT *
      FROM emission_factors
      WHERE activity_name = $1
      AND valid_from <= $2
      AND (
        valid_to IS NULL
        OR valid_to >= $2
      )
      LIMIT 1
      `,
      [activity_name, activity_date]
    );

    if (factorResult.rows.length === 0) {
      return res.status(404).json({
        message: "No emission factor found",
      });
    }

    const factor = factorResult.rows[0];

    const emission =
      Number(quantity) * Number(factor.factor_value);

    const record = await pool.query(
      `
      INSERT INTO emission_records
      (
        activity_name,
        scope,
        section,
        location,
        quantity,
        activity_date,
        factor_id,
        calculated_emission
      )
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8)
      RETURNING *
      `,
      [
        activity_name,
        scope,
        section,
        location,
        quantity,
        activity_date,
        factor.id,
        emission,
      ]
    );

    res.status(201).json(record.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;