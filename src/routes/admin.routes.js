const express = require("express");
const router = express.Router();
const {
  getOverview,
  getClusterAnalytics,
  getSubjectAnalytics
} = require("../controllers/admin.controller");

router.get("/overview", getOverview);
router.get("/clusters", getClusterAnalytics);
router.get("/subjects", getSubjectAnalytics);

module.exports = router;
