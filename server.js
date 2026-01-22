const express = require("express");
const cors = require("cors");
require("dotenv").config();

const teacherRoutes = require("./src/routes/teacher.routes");

const app = express();

// 🔹 Middleware
app.use(cors());
app.use(express.json());

// 🔹 Home route
app.get("/", (req, res) => {
  res.send("Teacher AI Backend is running");
});

// 🔹 HEALTH CHECK ROUTE ✅ ADD HERE
app.get("/health", (req, res) => {
  res.json({
    status: "UP",
    timestamp: new Date()
  });
});

// 🔹 API routes
app.use("/api/teacher", teacherRoutes);

// 🔹 Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
