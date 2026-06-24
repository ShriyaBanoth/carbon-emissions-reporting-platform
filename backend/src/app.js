const express = require("express");
const cors = require("cors");
require("dotenv").config();
const emissionRoutes = require("./routes/emissionRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const metricsRoutes = require("./routes/metricsRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/emissions", emissionRoutes);
app.use("/api/metrics", metricsRoutes);
app.use("/api/analytics", analyticsRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Carbon Emissions Reporting API Running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});