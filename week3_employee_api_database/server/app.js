const express = require("express");
const cors = require("cors");
const employeeRoutes = require("./routes/employeeRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(errorHandler);

// Routes
app.use("/api/employees", employeeRoutes);

// Root Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Employee Management API Running perfectly!",
  });
});

module.exports = app;
