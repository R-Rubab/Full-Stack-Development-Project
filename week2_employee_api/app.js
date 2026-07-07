const express = require("express");
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/employees", employeeRoutes);

// Home Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Employee Management API Running 🚀",
  });
});

module.exports = app;
