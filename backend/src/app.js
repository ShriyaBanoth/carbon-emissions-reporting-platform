const express = require("express");
const cors = require("cors");
require("dotenv").config();

const emissionRoutes = require("./routes/emissionRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/emissions", emissionRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Carbon Emissions Reporting API Running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});