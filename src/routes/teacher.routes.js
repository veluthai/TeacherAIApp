
/**
 * POST /api/teacher/problem
 * Description: Submit a classroom problem and get AI-based pedagogical guidance
 * Body: { problem, subject, grade, cluster }
 */

const express = require("express");
const router = express.Router();

const { submitProblem } = require("../controllers/teacher.controller");

router.post("/problem", submitProblem);

module.exports = router;
